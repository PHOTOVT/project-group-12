import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css';

async function fetchData() {
  try {
    // Делаем GET запрос с помощью Axios
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    // Получаем массив объектов из ответа
    const data = response.data;

    // Вызываем функцию для рендера данных в DOM
    renderData(data);
  } catch (error) {
    console.error('Ошибка при получении данных:', error.message);
  }
}

function renderData(data) {
  const resultsContainer = document.querySelector('.reviews-list');

  // Очищаем контейнер результатов перед добавлением новых элементов
  resultsContainer.innerHTML = '';

  // Проходимся по массиву объектов и создаем элементы для каждого объекта
  data.forEach(item => {
    // Создаем элементы для заголовка, изображения и описания

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

    // Создаем контейнер для элементов текущего объекта
    const itemContainer = document.createElement('li');
    itemContainer.classList.add('result-item');
    itemContainer.classList.add('swiper-slide');

    // Добавляем элементы в контейнер объекта
    itemContainer.appendChild(image);
    itemContainer.appendChild(header);
    itemContainer.appendChild(description);

    // Добавляем контейнер объекта в контейнер результатов
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
