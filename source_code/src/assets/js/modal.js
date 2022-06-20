const loginBtn = document.querySelector('#loginBtn');
const modalLogin = document.querySelector('#loginModal');
const mapBtn = document.querySelector('.footer__link');
const modalMap = document.querySelector('#mapModal');
const close = document.querySelectorAll('.modal__close');

loginBtn.addEventListener('click', () => {
  modalLogin.classList.add('modal--active');
});

mapBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalMap.classList.add('modal--active');
});

close[0].addEventListener('click', () => {
  modalLogin.classList.remove('modal--active');
})

close[1].addEventListener('click', () => {
  modalMap.classList.remove('modal--active');
})

