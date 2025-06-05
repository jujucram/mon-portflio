
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('messageStatus').textContent = "Merci pour ton message ! Je te répondrai bientôt.";
  this.reset();
});


const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active-link'));
    this.classList.add('active-link');
  });
});