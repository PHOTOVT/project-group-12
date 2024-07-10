import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css';

async function fetchData() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    const data = response.data;

    renderData(data);
  } catch (error) {
    console.error(error.message);
  }
}

function renderData(data) {
  const resultsContainer = document.querySelector('.reviews-list');

  resultsContainer.innerHTML = '';

  data.forEach(item => {
    const image = document.createElement('img');
    image.classList.add('list-image');
    image.src = item.avatar_url;
    image.alt = 'avatar';

    const header = document.createElement('h2');
    header.classList.add('list-header');
    header.textContent = item.author;

    const description = document.createElement('p');
    description.classList.add('list-review');
    description.textContent = item.review;

    const itemContainer = document.createElement('li');
    itemContainer.classList.add('result-item');
    itemContainer.classList.add('swiper-slide');

    itemContainer.appendChild(image);
    itemContainer.appendChild(header);
    itemContainer.appendChild(description);

    resultsContainer.appendChild(itemContainer);
  });
}

fetchData();

const swiperReviews = document.querySelector('.rev-global');
const swiperRev = new Swiper(swiperReviews, {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 8,
  speed: 2000,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  centeredSlides: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-right-arr',
    prevEl: '.swiper-button-prev-left-arr',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
