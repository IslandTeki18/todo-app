import * as React from 'react';
import { Task } from '~src/types';

type AddItemFormProps = {
    task: Task;
    onHandleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    setTask: React.Dispatch<React.SetStateAction<Task>>;
}

export const AddItemForm = (props:AddItemFormProps) => {


    function isButtonDisabled() {
        return props.task.title === "" || props.task.description === "" || props.task.due_date === "";
    }
    return (
        <form onSubmit={props.onHandleOnSubmit}>
        <div className="flex gap-4">
          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={props.task?.title}
            onChange={(e) =>
              props.setTask((prev) => {
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
            value={props.task?.description}
            onChange={(e) =>
              props.setTask((prev) => {
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
            value={props.task?.priority_level}
            onChange={(e) =>
              props.setTask((prev) => {
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
            value={props.task?.due_date}
            onChange={(e) => {
              props.setTask((prev) => {
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
          disabled={isButtonDisabled()}
        >
          Add Task
        </button>
      </form>
    );
};