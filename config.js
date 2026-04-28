const SUPABASE_URL = "https://tblhhwugigfgpqpidgoo.supabase.co";
const SUPABASE_KEY = "sb_publishable_Q0YvhaPRlYhyo9JQy03Xbw_VZ2HdNyq";

let supabaseClient = null;
let useMock = false;

if(SUPABASE_URL.includes("YOUR_PROJECT")){
  useMock = true;
} else {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}