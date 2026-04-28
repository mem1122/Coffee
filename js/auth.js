async function signUp(){
  if(useMock){
    authMsg.innerText = "Mock регистрация";
    return;
  }

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { error } = await supabaseClient.auth.signUp({ email, password });

  authMsg.innerText = error ? error.message : "Проверьте почту";
}

async function signIn(){
  if(useMock){
    auth.classList.add('hidden');
    booking.classList.remove('hidden');
    return;
  }

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if(error){
    authMsg.innerText = error.message;
  } else {
    auth.classList.add('hidden');
    booking.classList.remove('hidden');
  }
}