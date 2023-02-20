import supabase from '../../supabase';

export const registerWithEmail = async (email, password, phone) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    phone,
  });

  return { data, error };
};
