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

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  two_factor_auth_enabled?: boolean;
};
