//navbar scroll event

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // Adjust scroll value as needed
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});