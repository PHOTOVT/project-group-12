import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import iziToast from 'izitoast';

const refs = {
  inputElements: document.querySelectorAll('input'),
  inputEmail: document.querySelector('.form-email'),
  inputComment: document.querySelector('.form-comment'),
  buttonElement: document.querySelector('.form-button'),
};

const maxLength = 30;
const inputEmailValue = refs.inputEmail.value.trim();
const inputCommentValue = refs.inputComment.value.trim();

const overflowInput = (inputElements, maxLength) => {
  if (inputElements.value.length > maxLength) {
    inputElements.value = inputElements.value.slice(0, maxLength - 3) + '...';
  }
};

refs.inputElements.forEach(inputElement => {
  inputElement.addEventListener('input', () =>
    overflowInput(inputElement, maxLength)
  );
});

const saveToLocalStorage = (key, value) => {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
};

const loadFromLocalStorage = key => {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
};

async function postData(inputEmailValue, inputCommentValue) {
  const url = 'https://portfolio-js.b.goit.study/api';
  const params = {
    email: inputEmailValue.value,
    comment: inputCommentValue.value,
    headers: {
        'Content-Type': 'application/json'
    },
  };

  try {
    const response = await axios.post(url, params);
    if (response.ok) {
      const instance = basicLightbox.create(`
    <div class="modal">
    <h2 class="modal-title">Thank you for your interest in cooperation!</h2>
        <p class="modal-text">
        The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.
        </p>
    </div>
`);
      instance.show();
      form.reset();
      return response;
    } 
  }
   catch (error) {
    iziToast.show({
        message:
          'An error occurred while posting your data. Please, try again later.',
        position: 'bottomCenter',
        backgroundColor: '#ED3B44',
        messageColor: '#ffffff',
        theme: 'dark',
        maxWidth: '350px',
      });

      formElement.addEventListener('input', e => {
        const post = {
          email: refs.inputEmail.value.trim(),
          comment: refs.inputComment.value.trim(),
        };

        saveToLocalStorage('email', post.email.value);
        saveToLocalStorage('comment', post.comment.value);
      });

      form.addEventListener('submit', e => {
        e.preventDefault();
        post.email = form.elements.email.value;
        post.comment = form.elements.message.value;
        console.log(post);
        form.reset();
        localStorage.removeItem('email');
        localStorage.removeItem('comment');
      });

      document.addEventListener('DOMContentLoaded', () => {
        loadFromLocalStorage('email');
        loadFromLocalStorage('comment');
        form.elements.email.value = post.email;
        form.elements.comment.value = post.comment;
      });
  }
}

refs.buttonElement.addEventListener('submit', postData);