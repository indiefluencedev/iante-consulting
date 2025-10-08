const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', ()=>{
  if(getComputedStyle(navLinks).display === 'none'){
    navLinks.style.display = 'flex';
  } else {
    navLinks.style.display = 'none';
  }
});
