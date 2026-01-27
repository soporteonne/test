const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.tagName === 'A') {
    navLinks.classList.remove('open');
  }
});

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const nombre = formData.get('nombre') || 'cliente';
  alert(`Gracias ${nombre}, un asesor de Renzincosta te contactará en breve.`);
  form.reset();
});
