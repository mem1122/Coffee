async function signUp(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { error } = await supabaseClient.auth.signUp({ email, password });

  authMsg.innerText = error ? error.message : "Проверьте почту";
}

async function signIn(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if(error){
    authMsg.innerText = error.message;
  } else {
    window.location.href = "bookings.html";
  }
}