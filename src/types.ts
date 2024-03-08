export type Task = {
  id: number;
  title: string;
  description?: string;
  due_date?: string;
  priority_level: "Low" | "Medium" | "High";
  completed: boolean;
  recurring: boolean;
  recurrence_interval?: string;
  user_id: number;
};
