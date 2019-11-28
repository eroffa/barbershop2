'use strict';

// Модальное окно авторизации

(function () {
  var LoginModal = function () {
    window.Modal.call(this, document.querySelector('.modal--login')); // наследуем свойства родителя
    this.buttonOpen = document.querySelector('.user-nav__link--sigin'); // кнопка открытия модального окна

    this.LoginForm = new window.LoginForm(document.forms.auth); // конструктор формы авторизации

    this.start(); // запуск логики
  };

  // Наследуем методы родителя
  LoginModal.prototype = Object.create(window.Modal.prototype);
  LoginModal.prototype.constructor = LoginModal;

  // Запуск логики
  LoginModal.prototype.start = function () {
    window.Modal.prototype.start.call(this); // логика родителя
    this.buttonOpen.addEventListener('click', this.onOpenModal.bind(this)); // открытие модального окна
  };

  LoginModal.prototype.onOpenModal = function (evt) {
    window.Modal.prototype.onOpenModal.call(this, evt);

    this.focusInput();
  };

  // Фокусировка на нужном импуте
  LoginModal.prototype.focusInput = function () {
    try {
      this.LoginForm.$login.value = localStorage.getItem('login');
    } catch (e) {
      console.warn('Не удалось получить значение login в localStorage');
    }

    this.LoginForm.$login.value ? this.LoginForm.$password.focus() : this.LoginForm.$login.focus();
  };

  window.LoginModal = LoginModal;
})();
