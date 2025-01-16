//navbar scroll event

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const navLogo = document.querySelector('.nav-logo');
  const navMenu = document.querySelector('.nav-menu');
  if (window.scrollY > 50) { // Adjust scroll value as needed
    navbar.classList.add('scrolled');
    navLogo.classList.add('scrolled');
    navMenu.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    navLogo.classList.remove('scrolled');
    navMenu.classList.remove('scrolled');
  }
});