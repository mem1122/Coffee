const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_KEY = "YOUR_ANON_KEY";

let supabaseClient = null;
let useMock = false;

if(SUPABASE_URL.includes("YOUR_PROJECT")){
  useMock = true;
} else {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}