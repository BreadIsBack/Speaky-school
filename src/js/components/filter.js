const filterBox = document.querySelectorAll('.packages__images-item');
const filterItems = document.querySelectorAll('.packages__filter-item');
const filterTime = document.querySelector('.packages__list--time');
const inputs = document.querySelectorAll('.packages__input');
const imagesList = document.querySelector('.packages__images-list');
let shownCards = 3;

// if (filters) {

//     const array = Array.from(document.querySelector('.packages__images-list').children);
//     const visItems = array.slice(shownCards);

//     visItems.forEach(el => el.classList.add('hide'));

//   filters.addEventListener('click', event => {

//     let filterClass = event.target.dataset.filter;

//     filterBox.forEach(elem => {
//       elem.classList.remove('hide');

//       if (!elem.classList.contains(filterClass) && filterClass !== 'individual') {
//         elem.classList.add('hide');
//         filterTime.style.display = 'none';
//       }

//       if (!elem.classList.contains(filterClass) && filterClass !== 'speaking') {
//         elem.classList.add('hide');
//         filterTime.style.display = 'flex';
//       }

//       if (!elem.classList.contains(filterClass) && filterClass !== '30-minutes') {
//         elem.classList.add('hide');
//       }

//       if (!elem.classList.contains(filterClass) && filterClass !== '60-minutes') {
//         elem.classList.add('hide');
//       }



//     });

//   });


// }

if (imagesList) {

  const imagesListArr = Array.from(imagesList.children);
  const hideItems = imagesListArr.slice(shownCards);

  hideItems.forEach(hiddenItem => hiddenItem.classList.add('hide'));

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

        if (!elem.classList.contains(filterClass) && filterClass !== '30-minutes') {
          elem.classList.add('hide');
        }

        if (!elem.classList.contains(filterClass) && filterClass !== '60-minutes') {
          elem.classList.add('hide');
        }



      });

    });
  })




}


// inputs.forEach(input => {
  //   if (input.hasAttribute('checked') && input.dataset.filter == 'individual') {
  //     filterBox.forEach(box => {
  //       if (box.classList.contains('individual')) {
  //         box.style.display = 'block';
  //       }

  //       if (box.classList.contains('60-minutes')) {
  //         box.style.display = 'block';
  //       }
  //     })
  //   }
  // })



// inputs.forEach(input => {
//   filterBox.forEach(box => {
//     if (input.hasAttribute('checked') && input.dataset.filter == 'individual') {
//       if (box.classList.contains('individual')) {
//         box.style.display = 'block';
//       }

//       if (box.classList.contains('60-minutes')) {
//         box.style.display = 'block';
//       }
//     }

//     if (input.hasAttribute('checked') && input.dataset.filter == '60-minutes') {
//       if (box.classList.contains('individual')) {
//         box.style.display = 'block';
//       }

//       if (box.classList.contains('60-minutes')) {
//         box.style.display = 'block';
//       }
//     }
//   })
// })
