const filterBox = document.querySelectorAll('.packages__images-item');
const filterItems = document.querySelectorAll('.packages__filter-item');
const filterTime = document.querySelector('.packages__list--time');
const filtersOnline = document.querySelector('.filters-online');
const filtersOffline = document.querySelector('.filters-offline');
const inputs = document.querySelectorAll('.packages__input');
let counter = 0;

function hideCards (array) {

  array.forEach(function (item) {
    if(item.classList.contains('individual')) {
      counter++;
    }
  });

  const imagesListArr = Array.from(array);
  const hideItems = imagesListArr.slice(counter);
  hideItems.forEach(hiddenItem => hiddenItem.classList.add('hide'));

}

if (filtersOnline) {

  hideCards(filterBox);

  inputs.forEach(input => {
    input.addEventListener('click', () => {

      const filterClass = input.dataset.filter;

      filterBox.forEach(elem => {
        elem.classList.remove('hide');

        if (!elem.classList.contains(filterClass) && filterClass !== 'individual') {
          elem.classList.add('hide');
          filterTime.style.display = 'none';
        }

        if (!elem.classList.contains(filterClass) && filterClass !== 'speaking') {
          elem.classList.add('hide');
          filterTime.style.display = 'flex';
        }

      });

    });
  })
}

if (filtersOffline) {

  hideCards(filterBox);

  inputs.forEach(input => {

    input.addEventListener('click', function () {

      const filterClass = input.dataset.filter;

      filterBox.forEach(elem => {
        elem.classList.remove('hide');

        if (!elem.classList.contains(filterClass)) {
          elem.classList.add('hide');
        }

      });

    });
  })
}

