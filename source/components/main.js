'use strict';

(function () {
  var init = function () {
    // Если JS вкл.
    var html = document.documentElement;
    html.className = html.className.replace('no-js', 'js');

    // Интерактив для меню навигации
    var mainNav = document.querySelector('.main-nav');
    new window.Menu(mainNav);

    // Слайдер секции преимущества
    var slideAdvatages = document.querySelector('.slide.advatages');
    new window.Slide(slideAdvatages);

    // Слайдер секции отзывы
    var slideReview = document.querySelector('.slide.review');
    new window.Slide(slideReview);

    // Модальное окно авторизации
    new window.LoginModal();

    // Форма записи на стрижку
    var formHaircut = document.querySelector('.haircut__form form');
    new window.HaircutForm(formHaircut);
  };

  window.addEventListener('DOMContentLoaded', init);
})();
