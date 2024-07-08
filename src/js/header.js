document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.open-menu-btn');
  const closeMenuBtn = document.querySelector('.mob-menu-close-btn');
  const mobMenu = document.querySelector('.mob-menu');
  const menuLinks = document.querySelectorAll('.header-menu');
  const orderProjectBtn = document.getElementById('order-project-btn');
  const orderProjectBtnMain = document.getElementById('order-project-btn-main');

  openMenuBtn.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
  });

  closeMenuBtn.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobMenu.classList.remove('is-open');
    });
  });

  orderProjectBtn.addEventListener('click', () => {
    document
      .getElementById('work-together')
      .scrollIntoView({ behavior: 'smooth' });
    mobMenu.classList.remove('is-open');
  });
  orderProjectBtnMain.addEventListener('click', () => {
    document
      .getElementById('work-together')
      .scrollIntoView({ behavior: 'smooth' });
    mobMenu.classList.remove('is-open');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const menuList = document.getElementById('menuList');

  menuButton.addEventListener('click', function () {
    if (menuList.style.display === 'block') {
      menuList.style.display = 'none';
    } else {
      menuList.style.display = 'block';
    }
  });

  window.addEventListener('click', function (e) {
    if (!menuButton.contains(e.target) && !menuList.contains(e.target)) {
      menuList.style.display = 'none';
    }
  });
});
