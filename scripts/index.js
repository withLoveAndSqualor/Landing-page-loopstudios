const menuIcon = document.querySelector('.header__menu-icon');
const usualHeader = document.querySelector('.header-background');
const mobileMenu = document.querySelector('.menu-mobile');
const cross = document.querySelector('.menu-mobile__cross')

menuIcon.addEventListener('click', function () {
  usualHeader.style.display = 'none';
  mobileMenu.style.display = 'flex';
})

cross.addEventListener('click', function () {
  usualHeader.style.display = 'block';
  mobileMenu.style.display = 'none';
})