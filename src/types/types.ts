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
  instance_id: string;
  id: string;
  aud: string;
  role: string;
  email: string;
  encrypted_password: string;
  email_confirmed_at: string;
  invited_at: string | null;
  confirmation_token: string;
  confirmation_sent_at: string;
  recovery_token: string;
  recovery_sent_at: string | null;
  email_change_token_new: string;
  email_change: string;
  email_change_sent_at: string | null;
  last_sign_in_at: string;
  raw_app_meta_data: {
    provider: string;
    providers: string[];
  };
  raw_user_meta_data: Record<string, unknown>;
  is_super_admin: boolean | null;
  created_at: string;
  updated_at: string;
  phone: string | null;
  phone_confirmed_at: string | null;
  phone_change: string;
  phone_change_token: string;
  phone_change_sent_at: string | null;
  confirmed_at: string;
  email_change_token_current: string;
  email_change_confirm_status: number;
  banned_until: string | null;
  reauthentication_token: string;
  reauthentication_sent_at: string | null;
  is_sso_user: boolean;
  deleted_at: string | null;
};


