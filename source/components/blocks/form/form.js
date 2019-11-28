'use strict';

// Родительский конструктор для форм

(function () {
  var Form = function (elem) {
    this.$form = elem; // элемент формы

    this.$inputs = this.$form.elements; // поля формы
    this.$submit = this.$form.querySelector('button[type="submit"]'); // кнопка отправки

    this.message = ''; // сообщение об ошибке
    this.сharacters = 0; // количество символов введенное пользователем

    this.start();
  };

  Form.prototype.start = function () {
    this.$submit.addEventListener('click', this.onEditForm.bind(this)); // нажатие на кнопку отправки формы
    this.$form.addEventListener('submit', this.onSubmitForm.bind(this)); // отправка формы
  };

  // Событие при изменении ввода в поле
  Form.prototype.onEditForm = function () {
    this.onValidateForm();

    this.$form.addEventListener('input', this.onValidateForm.bind(this), true);
  };

  // Событие отправки формы
  Form.prototype.onSubmitForm = function () {
    this.$form.removeEventListener('input', this.onEditForm.bind(this), true);
  };

  // Событие валидации формы
  Form.prototype.onValidateForm = function () {
    // Код..
  };

  // Уведомление об ошибке
  Form.prototype.alert = function (input) {
    input.setCustomValidity(this.message);
    this.effect(input);
  };

  // Эффекты при ошибки
  Form.prototype.effect = function (input) {
    this.message ? input.classList.add('error') : input.classList.remove('error');
  };

  window.Form = Form;
})();
