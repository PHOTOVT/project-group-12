export const projectRefs = {
  btnLeft: document.querySelector('.project__button-left'),
  btnRight: document.querySelector('.project__button-right'),
  slider: document.querySelectorAll('.project__item'),
};

let projectIndex = 0;

projectRefs.btnLeft.addEventListener('click', clickLeft);
projectRefs.btnRight.addEventListener('click', clickRight);

projectRefs.slider[projectIndex].classList.add('active');
isActiveBtn();

function clickLeft() {
  projectRefs.slider[projectIndex].classList.remove('active');

  --projectIndex;
  projectRefs.slider[projectIndex].classList.add('active');
  isActiveBtn();
}
function clickRight() {
  projectRefs.slider[projectIndex].classList.remove('active');
  ++projectIndex;
  projectRefs.slider[projectIndex].classList.add('active');

  isActiveBtn();
}
console.log('projectRefs.slider');
console.log(projectRefs.slider.length);

function isActiveBtn() {
  const projectLength = projectRefs.slider.length;
  if (projectIndex <= 0) {
    projectRefs.btnLeft.setAttribute('disabled', '');
  } else projectRefs.btnLeft.removeAttribute('disabled');

  if (projectIndex >= projectLength - 1) {
    projectRefs.btnRight.setAttribute('disabled', '');
  } else projectRefs.btnRight.removeAttribute('disabled');
}
