import * as React from "react";
import { useState, useEffect } from "react";
import { Task } from "./types";
import { createTodo, getAllTodos, supabase } from "./supabase";

export function App() {
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

  function disableButton() {
    return task.title === "" || task.description === "" || task.due_date === "";
  }

  return (
    <div className="w-full min-h-screen p-8">
      <form onSubmit={handleOnSubmit}>
        <div className="flex gap-4">
          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={task?.title}
            onChange={(e) =>
              setTask((prev) => {
                return {
                  ...prev,
                  title: e.target.value,
                };
              })
            }
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="description"
            placeholder="Task description"
            value={task?.description}
            onChange={(e) =>
              setTask((prev) => {
                return {
                  ...prev,
                  description: e.target.value,
                };
              })
            }
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <select
            value={task?.priority_level}
            onChange={(e) =>
              setTask((prev) => {
                return {
                  ...prev,
                  priority_level: e.target.value as "Low" | "Medium" | "High",
                };
              })
            }
            name="priority_level"
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="date"
            name="due_date"
            className="w-1/2 p-2 border border-gray-300 rounded-md"
            value={task?.due_date}
            onChange={(e) => {
              setTask((prev) => {
                return {
                  ...prev,
                  due_date: e.target.value,
                };
              });
            }}
          />
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md disabled:bg-gray-300"
          disabled={disableButton()}
        >
          Add Task
        </button>
      </form>
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
}
