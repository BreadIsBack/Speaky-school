let menu = document.querySelector('.nav__dropdown-menu');
let menuBtn = document.querySelector('.nav__btn');

menuBtn.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && menu.classList.contains('open')) {
    menu.classList.remove('open');
    this.classList.remove('after');
  }
});

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('open');
  this.classList.toggle('after');

   // если открыто меню
  if (menu.classList.contains('open')) {
    this.setAttribute('aria-expanded', true);
    menu.setAttribute('aria-hidden', false);
    this.setAttribute('title', 'Закрыть меню')
  } else { // если закрыто меню
    this.setAttribute('aria-expanded', false);
    menu.setAttribute('aria-hidden', true);
    this.setAttribute('title', 'Открыть меню')
  }
})

//Закрыть меню при клике по области
window.addEventListener('click', e => { // при клике в любом месте окна браузера
  const target = e.target // находим элемент, на котором был клик
  if (!target.closest('.nav__list') && !target.closest('.nav__btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    menu.classList.remove('open') // то закрываем окно навигации, удаляя активный класс
    menuBtn.classList.remove('after');
    menuBtn.setAttribute('title', 'Открыть меню');
    menu.setAttribute('aria-hidden', true);
    menuBtn.setAttribute('aria-expanded', false);
  }
})
