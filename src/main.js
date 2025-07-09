import './style.css';


function onSubmitForm(e) {
 e.preventDefault();
  const name = elemInputName.value;
  const phone = elemInputPhone.value;

  if (!regName.test(name)) {
    elemErrorName.classList.add('form__error-open');
  } else {
    elemErrorName.classList.remove('form__error-open');
  }
  if (!regPhone.test(phone)) {
    elemErrorPhone.classList.add('form__error-open');
  } else {
    elemErrorPhone.classList.remove('form__error-open');
  }

  if (regName.test(name) && regPhone.test(phone)) {
    // const formData = new FormData(form);
    // formData.set('date', new Date().toISOString());

    // fetch(scriptURL, { method: 'POST', body: formData })
    //   .then(response => console.log('Success!', response))
    //   .catch(error => console.error('Error!', error.message));

    var formData = {
      name: name,
      phone: phone,
      date: new Date().toISOString(),
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then(response => {
        response.text()
      } )
      .catch(error => {
        console.error('Ошибка:', error);
      });

    modal.classList.remove('modal-open');
    location.href = '/thanks';
  }
} 


const btnMenu = document.querySelector('.header__button');
const popup = document.querySelector('.header__nav');

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('header__button-close');
  popup.classList.toggle('header__nav-open');
});

const links = document.querySelectorAll('.nav__link');

links.forEach(el => {
  el.addEventListener('click', () => {
    btnMenu.classList.remove('header__button-close');
    popup.classList.remove('header__nav-open');
  });
});

const modal = document.querySelector('#modal');
const elemModalContent = document.querySelector('#modal-content');
const btnCloseModal = document.querySelector('#modal__close');
const form = document.querySelector('#modal-form');

elemModalContent.addEventListener('click', e => {
  e.stopPropagation();
});

[modal, btnCloseModal].forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('modal-open');
    elemErrorName.classList.remove('form__error-open');
    elemErrorPhone.classList.remove('form__error-open');
    form.reset();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.classList.remove('modal-open');
    elemErrorName.classList.remove('form__error-open');
    elemErrorPhone.classList.remove('form__error-open');
    form.reset();
  }
  if (e.key === 'Enter' && modal.classList.contains('modal-open')) {
    onSubmitForm(e)
  }
})

btnCloseModal.addEventListener('click', () => {
  modal.classList.remove('modal-open');
  elemErrorName.classList.remove('form__error-open');
  elemErrorPhone.classList.remove('form__error-open');
  form.reset();
});

const btnOpenModal = document.querySelector('#button-open');
const btnMain = document.querySelector('#main-button');

[btnOpenModal, btnMain].forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('modal-open');
  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbz93Pokx5CGHCvzwcSlAhPmHlYWLikKmDDVGgVe-COwPjNB_r5995Le0k5O3tK6W_8cQA/exec'
form.actiom = scriptURL;

const elemInputName = document.querySelector('#input-name');
const elemInputPhone = document.querySelector('#input-phone');
const elemErrorName = document.querySelector('#name-error');
const elemErrorPhone = document.querySelector('#phone-error');

const regName = /^[a-zA-Zа-яА-ЯёЁ\s'-]+$/;
const regPhone =
  /^((\+375)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/;

const btnSend = document.querySelector('#submit');

btnSend.addEventListener('click', onSubmitForm);
