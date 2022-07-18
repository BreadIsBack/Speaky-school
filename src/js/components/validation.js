import {validateForms} from '../functions/validate-forms';
const forms = document.querySelectorAll('.form-box__form');

if (forms) {

  forms.forEach((form, index) => {
    const formClass = `form-${index}`;
    form.classList.add(formClass);
      if (form.dataset.form == 'adult-form') {
        const rules = [{
            ruleSelector: '.form-box__input-name',
            rules: [{
              rule: 'required',
              value: true,
              errorMessage: 'Заполните имя!'
            }]
          },
          {
            ruleSelector: '.form-box__input-phone',
            tel: true,
            telError: 'Введите корректный телефон',
            rules: [{
              rule: 'required',
              value: true,
              errorMessage: 'Заполните телефон!'
            }]
          },
          {
            ruleSelector: '.form-box__input-email',
            rules: [{
                rule: 'required',
                value: true,
                errorMessage: 'Заполните Email!'
              },
              {
                rule: 'email',
                value: true,
                errorMessage: 'Введите корректный Email!'
              }
            ]
          },
        ];

        const afterForm = () => {
          console.log('Произошла отправка, тут можно писать любые действия');
        };

        validateForms(`.${formClass}`, rules, afterForm);
      };

      if (form.dataset.form == 'child-form') {
        const rules = [{
            ruleSelector: '.form-box__input-name',
            rules: [{
              rule: 'required',
              value: true,
              errorMessage: 'Заполните имя!'
            }]
          },
          {
            ruleSelector: '.form-box__input-phone',
            tel: true,
            telError: 'Введите корректный телефон',
            rules: [{
              rule: 'required',
              value: true,
              errorMessage: 'Заполните телефон!'
            }]
          },
          {
            ruleSelector: '.form-box__input-email',
            rules: [{
                rule: 'required',
                value: true,
                errorMessage: 'Заполните Email!'
              },
              {
                rule: 'email',
                value: true,
                errorMessage: 'Введите корректный Email!'
              }
            ]
          },
          {
            ruleSelector: '.form-box__input-child',
            rules: [{
              rule: 'required',
              value: true,
              errorMessage: 'Заполните имя ребенка!'
            }]
          },
          {
            ruleSelector: '.form-box__input-age',
            rules: [{
              rule: 'required',
              value: true,
              errorMessage: 'Заполните возраст ребенка!'
            }]
          },
        ];

        const afterForm = () => {
          console.log('Произошла отправка, тут можно писать любые действия');
        };

        validateForms(`.${formClass}`, rules, afterForm);
      };

      if (form.dataset.form == 'payment-form') {
        const rules = [{
            ruleSelector: '.form-box__input-name',
            rules: [{
              rule: 'required',
              value: true,
              errorMessage: 'Заполните имя!'
            }]
          },
          {
            ruleSelector: '.form-box__input-phone',
            tel: true,
            telError: 'Введите корректный телефон',
            rules: [{
              rule: 'required',
              value: true,
              errorMessage: 'Заполните телефон!'
            }]
          },
          {
            ruleSelector: '.form-box__input-email',
            rules: [{
                rule: 'required',
                value: true,
                errorMessage: 'Заполните Email!'
              },
              {
                rule: 'email',
                value: true,
                errorMessage: 'Введите корректный Email!'
              }
            ]
          },
          {
            ruleSelector: '.form-box__input-summ',
            rules: [{
              rule: 'required',
              value: true,
              errorMessage: 'Заполните сумму!'
            }]
          },
        ];

        const afterForm = () => {
          console.log('Произошла отправка, тут можно писать любые действия');
        };

        validateForms(`.${formClass}`, rules, afterForm);
      };

  });
};

