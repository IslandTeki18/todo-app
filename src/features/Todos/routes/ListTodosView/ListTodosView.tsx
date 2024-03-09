import * as React from "react";
import { useState, useEffect } from "react";
import { Task } from "~src/types";
import { createTodo, getAllTodos, supabase } from "~src/supabase";
import { AddItemForm } from "../../components";

export const ListTodosView = () => {
  const [todos, setTodos] = useState<Task[] | null>([]);
  const [error, setError] = useState<string | null>(null);
  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
    due_date: "",
    priority_level: "Low",
    completed: false,
    recurring: false,
    recurrence_interval: "",
    user_id: 1,
    id: 0,
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const result = await getAllTodos();
    if (result) {
      setTodos(result.todos || null);
      setError(result.error);
    }
  };

  async function removeItem(id: number) {
    try {
      const { error } = await supabase.from("todos").delete().eq("id", id);
      if (error) {
        console.log(error);
      } else {
        setTodos(todos?.filter((task) => task.id !== id) || []);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const data = await createTodo(task);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full min-h-screen p-8">
      <AddItemForm
        task={task}
        setTask={setTask}
        onHandleOnSubmit={handleOnSubmit}
      />
      <ul role="list" className="divide-y divide-gray-100">
        {todos &&
          todos.map((task) => (
            <li key={task.title} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-6 items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded"
                />
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {task.title}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {task.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  onClick={() => removeItem(task.id)}
                >
                  remove item
                </button>
              </div>

              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  Priority Level: {task.priority_level}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Due Date: {task.due_date}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
