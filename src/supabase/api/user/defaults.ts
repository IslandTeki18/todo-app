import { supabase } from "~src/supabase/config";

// Create function that signs up a user
const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

// Create function that signs in a user
const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// Create function that signs out a user
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};


export { signUp, signIn, signOut}