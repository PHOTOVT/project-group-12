import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const about = document.querySelector('.about-box');
const aboutHardskills = document.querySelector('#swiper');

const aboutAc = new Accordion(about, {
  openOnInit: [0],
  showMultiple: true,
  collapse: true,
});

const aboutSwiper = new Swiper(aboutHardskills, {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  centeredSlides: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
