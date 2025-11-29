const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');
const header = document.querySelector('header');

menuToggle?.addEventListener('click', () => {
  navList?.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

// Smooth scroll for internal anchors
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
      navList?.classList.remove('open');
      menuToggle?.classList.remove('open');
    }
  });
});
