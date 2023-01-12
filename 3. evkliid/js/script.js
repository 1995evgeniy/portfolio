/* ==================================swiper==================================*/

var Swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoheight: true,
  // autoplay: {
  // delay: 2000,
  // },
  paginationBulletMessage: 'Слайд {{index}}',
});

/* ==================================tabs==================================*/

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.how-step').forEach(function (HowStep) {
    HowStep.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.how__wrapper').forEach(function (HowWrap) {
        HowWrap.classList.remove('how__wrapper-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('how__wrapper-active');

      document.querySelectorAll('.how-step').forEach(function (event) {
        event.classList.remove('how-step-active');
      });
      event.currentTarget.classList.add('how-step-active');
    });
  });

  /* ==================================burger==================================*/

  document.querySelector('.header__burger').addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('header__burger-active');
    document.querySelector('.header__nav').classList.toggle('header__nav-active');
  });

  /* ==================================search==================================*/

  var headerForm = document.getElementById('header__form');
  var headerIconSearch = document.getElementById('header__icon-search');

  document.querySelector('.header__icon-search').addEventListener('click', function (e) {
    headerForm.classList.add('header__form-active');
    e.currentTarget.classList.add('header__icon-search-open');
  });

  document.querySelector('.header__icon-closed').addEventListener('click', function () {
    headerForm.classList.remove('header__form-active');
    document.querySelector('.header__icon-search').classList.remove('header__icon-search-open');
  });

});

/* ==================================accordion==================================*/

$(function () {
  $("#accordion").accordion({
    heightStyle: "content"
  });
});



  /* ==================================валидация==================================*/

  new JustValidate('.footer-form', {

    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
      },

    },
    colorWrong: '#ff5c00',
    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Введите 3 и более символов',
        maxLength: 'Запрещено вводить более 15 символов'
      },
      email: {
        email: 'Укажите ваш email',
        required: 'Укажите ваш e-mail'
      },
      message: {
        required: 'Укажите ваше сообщение'
      },
    },
  });
