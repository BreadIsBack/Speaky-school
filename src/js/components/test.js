// // const title = document.querySelector('.hero-main__title');

// // title.className = 'foo-bar';
// // const ttleCLass = document.querySelector('.foo-bar');
// // console.log(ttleCLass);

// import {validateForms} from '../functions/validate-forms';
// // const formAdultOne = document.querySelector('.form-box__form--adult-1');
// // const formChildOne = document.querySelector('.form-box__form--child-1');
// // const formAdultTwo = document.querySelector('.form-box__form--child-2');
// // const formChildTwo = document.querySelector('.form-box__form--child-2');
// const forms = document.querySelectorAll('.form-box__form');

// if (forms) {

//   let counterAdult = 0;
//   let counterChild = 0;
//   let counterPayment = 0;

// forms.forEach((form, index) => {
//     if (form.dataset.form == 'adult-form') {
//       const rules = [{
//           ruleSelector: '.form-box__input-name',
//           rules: [{
//             rule: 'required',
//             value: true,
//             errorMessage: 'Заполните имя!'
//           }]
//         },
//         {
//           ruleSelector: '.form-box__input-phone',
//           tel: true,
//           telError: 'Введите корректный телефон',
//           rules: [{
//             rule: 'required',
//             value: true,
//             errorMessage: 'Заполните телефон!'
//           }]
//         },
//         {
//           ruleSelector: '.form-box__input-email',
//           rules: [{
//               rule: 'required',
//               value: true,
//               errorMessage: 'Заполните Email!'
//             },
//             {
//               rule: 'email',
//               value: true,
//               errorMessage: 'Введите корректный Email!'
//             }
//           ]
//         },
//       ];

//       const afterForm = () => {
//         console.log('Произошла отправка, тут можно писать любые действия');
//       };

//       validateForms(`.form-box__form--adult-${counterAdult + 1}`, rules, afterForm);
//       counterAdult++;
//     };

//     if (form.dataset.form == 'child-form') {
//       const rules = [{
//           ruleSelector: '.form-box__input-name',
//           rules: [{
//             rule: 'required',
//             value: true,
//             errorMessage: 'Заполните имя!'
//           }]
//         },
//         {
//           ruleSelector: '.form-box__input-phone',
//           tel: true,
//           telError: 'Введите корректный телефон',
//           rules: [{
//             rule: 'required',
//             value: true,
//             errorMessage: 'Заполните телефон!'
//           }]
//         },
//         {
//           ruleSelector: '.form-box__input-email',
//           rules: [{
//               rule: 'required',
//               value: true,
//               errorMessage: 'Заполните Email!'
//             },
//             {
//               rule: 'email',
//               value: true,
//               errorMessage: 'Введите корректный Email!'
//             }
//           ]
//         },
//         {
//           ruleSelector: '.form-box__input-child',
//           rules: [{
//             rule: 'required',
//             value: true,
//             errorMessage: 'Заполните имя ребенка!'
//           }]
//         },
//         {
//           ruleSelector: '.form-box__input-age',
//           rules: [{
//             rule: 'required',
//             value: true,
//             errorMessage: 'Заполните возраст ребенка!'
//           }]
//         },
//       ];

//       const afterForm = () => {
//         console.log('Произошла отправка, тут можно писать любые действия');
//       };

//       validateForms(`.form-box__form--child-${counterChild + 1}`, rules, afterForm);
//       counterChild++;
//     };

//     if (form.dataset.form == 'payment-form') {
//       const rules = [{
//           ruleSelector: '.form-box__input-name',
//           rules: [{
//             rule: 'required',
//             value: true,
//             errorMessage: 'Заполните имя!'
//           }]
//         },
//         {
//           ruleSelector: '.form-box__input-phone',
//           tel: true,
//           telError: 'Введите корректный телефон',
//           rules: [{
//             rule: 'required',
//             value: true,
//             errorMessage: 'Заполните телефон!'
//           }]
//         },
//         {
//           ruleSelector: '.form-box__input-email',
//           rules: [{
//               rule: 'required',
//               value: true,
//               errorMessage: 'Заполните Email!'
//             },
//             {
//               rule: 'email',
//               value: true,
//               errorMessage: 'Введите корректный Email!'
//             }
//           ]
//         },
//         {
//           ruleSelector: '.form-box__input-summ',
//           rules: [{
//             rule: 'required',
//             value: true,
//             errorMessage: 'Заполните сумму!'
//           }]
//         },
//       ];

//       const afterForm = () => {
//         console.log('Произошла отправка, тут можно писать любые действия');
//       };

//       validateForms(`.form-box__form--payment-${counterPayment + 1}`, rules, afterForm);
//       counterPayment++;
//     };

// });
// };




// const tabOneMain = document.getElementById('tab-1');
// const tabTwoMain = document.getElementById('tab-2');
// const tabTrial = document.getElementById('tab-3');

// if (tabOneMain) {
//   const firstTab = new GraphTabs('tab-1');
// }

// if (tabTwoMain) {
//   const secondTab = new GraphTabs('tab-2');
// }

// if (tabTrial) {
//   const secondTab = new GraphTabs('tab-3');
// }
