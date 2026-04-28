function showSection(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if(id === 'myBookings') loadBookings();
}

function showCategory(cat){
  document.getElementById('coffee').classList.add('hidden');
  document.getElementById('dessert').classList.add('hidden');

  document.getElementById(cat).classList.remove('hidden');
}