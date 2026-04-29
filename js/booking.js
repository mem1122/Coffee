async function book(){
  const { data } = await supabaseClient.auth.getUser();

  if(!data.user){
    bookMsg.innerText = "Сначала войдите";
    return;
  }

  const { error } = await supabaseClient.from('bookings').insert([{
    user_id: data.user.id,
    date: date.value,
    time: time.value,
    guests: guests.value
  }]);

  bookMsg.innerText = error ? error.message : "Бронь создана";
}

async function loadBookings(){
  const { data: userData } = await supabaseClient.auth.getUser();

  const { data } = await supabaseClient
    .from('bookings')
    .select('*')
    .eq('user_id', userData.user.id);

  bookingList.innerHTML = "";

  data.forEach(b=>{
    bookingList.innerHTML += `<div>${b.date} ${b.time}</div>`;
  });
}

loadBookings();