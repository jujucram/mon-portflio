// Animation d'apparition des sections au scroll
function revealSections() {
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', () => {
  revealSections();

  // Animation sur les liens du menu : illumine le lien actif
  const navLinks = document.querySelectorAll('nav a');
  function setActiveLink(hash) {
    navLinks.forEach(link => {
      link.classList.toggle('active-link', link.getAttribute('href') === hash);
    });
  }
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
          setActiveLink(this.getAttribute('href'));
        }
      }
    });
  });
  // Active le lien correspondant à la section visible au scroll
  window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) {
        current = '#' + section.id;
      }
    });
    if (current) setActiveLink(current);
  });

  // Animation sur le formulaire de contact
  const contactForm = document.getElementById('contactform');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('messageStatus').textContent =
        "Merci pour ton message ! Je te répondrai bientôt.";
      contactForm.reset();
    });
  }
});