import Choices from 'choices.js';

const selects = document.querySelectorAll('.tabs__select');
selects.forEach(el => {
  new Choices(el, {
    searchEnabled: false,
  });
});
