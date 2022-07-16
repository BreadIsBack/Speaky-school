import Choices from 'choices.js';

const selects = document.querySelectorAll('.form-box__select');
selects.forEach(el => {
  new Choices(el, {
    searchEnabled: false,
    allowHTML: true,
  });
});
