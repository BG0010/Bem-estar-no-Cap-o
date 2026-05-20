// ===== Navbar: muda cor ao rolar =====
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
  if (window.scrollY > 400) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
});
// ===== Menu responsivo =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);
// ===== FAQ accordion =====
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-question');
  const a = item.querySelector('.faq-answer');
  q.addEventListener('click', () => {
    const isOpen = item.classList.toggle('active');
    a.style.maxHeight = isOpen ? a.scrollHeight + 40 + 'px' : '0';
  });
});
// ===== Botão voltar ao topo =====
backToTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
// ===== Animação ao aparecer (reveal) =====
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));