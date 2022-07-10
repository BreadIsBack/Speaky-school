import { validateForms } from '../functions/validate-forms';
const formAdultOne = document.querySelector('.tabs__form--adult-1');
const formChildOne = document.querySelector('.tabs__form--child-1');
const formAdultTwo = document.querySelector('.tabs__form--child-2');
const formChildTwo = document.querySelector('.tabs__form--child-2');

if (formAdultOne) {
  const rules = [
    {
      ruleSelector: '.tabs__input-name',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-phone',
      tel: true,
      telError: 'Введите корректный телефон',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните телефон!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-email',
      rules: [
        {
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

  validateForms('.tabs__form--adult-1', rules, afterForm);
}

if (formChildOne) {
  const rules = [
    {
      ruleSelector: '.tabs__input-name',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-phone',
      tel: true,
      telError: 'Введите корректный телефон',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните телефон!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-email',
      rules: [
        {
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
      ruleSelector: '.tabs__input-child',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя ребенка!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-age',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните возраст ребенка!'
        }
      ]
    },
  ];

  const afterForm = () => {
    console.log('Произошла отправка, тут можно писать любые действия');
  };

  validateForms('.tabs__form--child-1', rules, afterForm);
}



if (formAdultTwo) {
  const rules = [
    {
      ruleSelector: '.tabs__input-name',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-phone',
      tel: true,
      telError: 'Введите корректный телефон',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните телефон!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-email',
      rules: [
        {
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

  validateForms('.tabs__form--adult-2', rules, afterForm);
}

if (formChildTwo) {
  const rules = [
    {
      ruleSelector: '.tabs__input-name',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-phone',
      tel: true,
      telError: 'Введите корректный телефон',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните телефон!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-email',
      rules: [
        {
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
      ruleSelector: '.tabs__input-child',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя ребенка!'
        }
      ]
    },
    {
      ruleSelector: '.tabs__input-age',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните возраст ребенка!'
        }
      ]
    },
  ];

  const afterForm = () => {
    console.log('Произошла отправка, тут можно писать любые действия');
  };

  validateForms('.tabs__form--child-2', rules, afterForm);
}
