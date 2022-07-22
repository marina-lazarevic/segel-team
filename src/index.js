import banner_img from './assets/banner.webp';
import './style/main.scss';
import './components/events';

document.querySelector('#banner-img').src = banner_img;

const nav_btn = document.querySelector('#menu-btn');
const nav = document.querySelector('#nav');

nav_btn.addEventListener('click', () => {
    nav.classList.toggle('header__nav--open');
    nav_btn.classList.toggle('header__btn--close');
})

document.querySelectorAll('#nav .header__anchor').forEach(anchor => {
    anchor.addEventListener('click', () => {
        nav.classList.remove('header__nav--open');
        nav_btn.classList.remove('header__btn--close');
    })
});

import './components/about_slider';