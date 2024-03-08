import { supabase } from "~src/supabase/config";
import { Task } from "~src/types";

// Get all Todos
const getAllTodos = async () => {
  try {
    let { data: todos, error } = await supabase.from("todos").select("*");
    return { todos, error };
  } catch (error) {
    console.error("Error getting tasks: ", error);
    return { error };
  }
};

// Create a new todo
const createTodo = async (newTodo: Task) => {
  try {
    const data = await supabase.from("todos").insert({
      title: newTodo.title,
      description: newTodo.description,
      priority_level: newTodo.priority_level,
      due_date: newTodo.due_date,
      completed: newTodo.completed,
      recurring: newTodo.recurring,
      user_id: newTodo.user_id,
    });
    return data;
  } catch (error) {
    return console.error("Error creating todo: ", error);
  }
};


const removeTodo = async (id: number) => {
    try {
        const { error } = await supabase.from("todos").delete().eq("id", id);
        return error;
    } catch (error) {
        return console.error("Error deleting todo: ", error);
    }
    };

export { getAllTodos, createTodo, removeTodo };
