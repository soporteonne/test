const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const nombre = formData.get('nombre') || 'creador';
  alert(`¡Gracias ${nombre}! Te responderemos muy pronto.`);
});
