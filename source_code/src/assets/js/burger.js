const btnBurger = document.querySelector('.header__burger')
const controls = document.querySelector('.header__nav')

btnBurger.addEventListener('click', function () {
  controls.classList.toggle('header__nav--active')
})
