import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const refs = {
  inputElements: document.querySelectorAll('input'),
  inputEmail: document.querySelector('.form-email'),
  inputComment: document.querySelector('.form-comment'),
  buttonElement: document.querySelector('.form-button'),
  formElement: document.querySelector('.form-cooperation'),
};

const maxLength = 25;

const overflowInput = (inputElement, maxLength) => {
  if (inputElement.value.length > maxLength) {
    inputElement.value = inputElement.value.slice(0, maxLength) + '...';
  }
};

refs.inputElements.forEach(inputElement => {
  inputElement.addEventListener('input', () =>
    overflowInput(inputElement, maxLength)
  );
});

async function postData(email, comment) {
  const url = 'https://portfolio-js.b.goit.study/api/requests';
  const request = { email, comment };
  

  try {
    const response = await axios.post(url, request);
    const instance = basicLightbox.create(`
      <div class="modal">
      <div class="modal-close-icon-container">
  <svg class="modal-close-icon" width="22" height="22">
    <use href="./img/sprite.svg#icon-close"></use>
        </svg>
      </div>
        <h2 class="modal-title">${response.data.title}</h2>
        <p class="modal-text">${response.data.message}</p>
      </div>
    `);
    instance.show();
    refs.formElement.reset();

    const iconElement = instance.element().querySelector('.modal-close-icon');
    iconElement.addEventListener('click', () => instance.close());

    const handleEscape = event => {
      if (event.key === 'Escape') {
        instance.close();
        refs.formElement.reset();
        document.removeEventListener('keydown', handleEscape);
      }
    };

    document.addEventListener('keydown', handleEscape);
  } catch (error) {
    iziToast.show({
      message:
        'An error occurred while posting request. Please, try again later.',
      position: 'bottomCenter',
      backgroundColor: '#ed3b44',
      messageColor: '#fafafa',
      theme: 'dark',
      maxWidth: '250px',
    });
  }
}

refs.formElement.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const comment = form.elements.comment.value.trim();
  postData(email, comment);
}
