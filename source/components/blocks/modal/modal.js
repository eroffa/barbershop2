'use strict';

// Родительский конструктор для модальных окон

(function () {
  var Modal = function (elem) {
    this.$modal = elem; // элемент модального окна
    this.overlay = document.querySelector('.overlay'); // элемент подложки затемнения
    this.buttonOpen = null; // кнопка открытия модального окна
    this.buttonClose = this.$modal.querySelector('.modal__close'); // кнопка закрытия модального окна
  };

  // Запуск логики
  Modal.prototype.start = function () {
    this.buttonClose.addEventListener('click', this.onCloseModal.bind(this));
  };

  // Открытие модального окна
  Modal.prototype.open = function () {
    this.$modal.classList.remove('hidden');
    this.overlay.classList.remove('hidden');
  };

  // Закрытие модального окна
  Modal.prototype.close = function () {
    this.$modal.classList.add('hidden');
    this.overlay.classList.add('hidden');
  };

  // Событие закрытия модального окна
  Modal.prototype.onCloseModal = function () {
    this.close();

    document.removeEventListener('keydown', this.onKeyPress.bind(this));
  };

  // Событие открытия модального окна
  Modal.prototype.onOpenModal = function (evt) {
    evt.preventDefault();

    this.open();
    document.addEventListener('keydown', this.onKeyPress.bind(this));
  };

  Modal.prototype.onKeyPress = function (evt) {
    var ESC = 27;

    if (evt.keyCode === ESC) {
      this.onCloseModal();
    }
  };

  window.Modal = Modal;
})();
