import './style.css';

const menuBtn = document.querySelector('.header__button');
const popup = document.querySelector('.header__nav');
console.log(menuBtn, popup);

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header__button-close');
  popup.classList.toggle('header__nav-open');
});

const links = document.querySelectorAll('.nav__link');

links.forEach(el => {
  el.addEventListener('click', () => {
    menuBtn.classList.remove('header__button-close');
    popup.classList.remove('header__nav-open');
  });
});
