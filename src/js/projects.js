import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const projectSwiper = document.querySelector('#pr-swiper')

const prSwiper = new Swiper(projectSwiper, {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 8,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-pr-button-next',
    prevEl: '.swiper-pr-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})