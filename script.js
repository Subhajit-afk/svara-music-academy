const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '70px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '24px 7vw';
  nav.style.background = '#f6f2ea';
  nav.style.borderBottom = '1px solid #ded8cc';
});
document.querySelectorAll('.nav nav a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 800) nav.style.display = '';
}));
