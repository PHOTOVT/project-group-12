export const projectRefs = {
  btnLeft: document.querySelector('.project__button-left'),
  btnRight: document.querySelector('.project__button-right'),
  //   loader: document.querySelector('.loader'),
  //   preLoader: document.querySelector('.preLoader'),
  //   nextImg: document.querySelector('.nextImg'),
};
projectRefs.btnLeft.addEventListener('click', clickLeft);
projectRefs.btnRight.addEventListener('click', clickRight);

function clickLeft() {
  console.log('Left!');
}
function clickRight() {
  console.log('Right!');
}
