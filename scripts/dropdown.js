const btnMenuMobile = document.querySelector('.btn-menu-hamburger');
const menuMobileList = document.querySelector('.menu-mobile-list');

btnMenuMobile = addEventListener('click', () => {
  menuMobileList.classList.toggle('active');
  btnMenuMobile.classList.toggle('close');
});
