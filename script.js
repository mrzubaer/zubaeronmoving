// মোবাইল মেনু টগল
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    const isOpen = siteNav.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => siteNav.classList.remove('open'));
  });
}
