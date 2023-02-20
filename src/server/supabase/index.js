import { createClient } from '@supabase/supabase-js';
const projectUrl = process.env.REACT_APP_PROJECT_URL;
const anonKey = process.env.REACT_APP_ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

export default supabase;
