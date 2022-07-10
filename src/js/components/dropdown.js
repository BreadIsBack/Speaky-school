let menu = document.querySelector('.nav__dropdown-menu');
let menuBtn = document.querySelector('.nav__btn');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');

  // если открыто меню
  if (menu.classList.contains('open')) {
    menuBtn.setAttribute('aria-expanded', true);
    menu.setAttribute('aria-hidden', false);
    menuBtn.setAttribute('title', 'Закрыть меню')
  } else {
    menuBtn.setAttribute('aria-expanded', false);
    menu.setAttribute('aria-hidden', true);
    menuBtn.setAttribute('title', 'Открыть меню')
  }
})
