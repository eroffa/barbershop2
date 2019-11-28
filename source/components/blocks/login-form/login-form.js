'use strict';

// Форма авторизации

(function () {
  var LoginForm = function (elem) {
    window.Form.call(this, elem); // наследуем родительские свойства
    this.$modal = this.$form.parentElement; // модальное окно в котором находится форма авторизации
    this.$login = this.$inputs.login; // поле ввода логина
    this.$password = this.$inputs.password; // поле ввода пароля
  };

  // Наследование методов родителя
  LoginForm.prototype = Object.create(window.Form.prototype);
  LoginForm.prototype.constructor = LoginForm;

  // Событие отправки формы
  LoginForm.prototype.onSubmitForm = function (evt) {
    window.Form.prototype.onSubmitForm.call(this); // логика родителя

    localStorage.setItem('login', this.$login.value);
  };

  // Событие валидации формы
  LoginForm.prototype.onValidateForm = function () {
    window.Form.prototype.onValidateForm.call(this); // логика родителя
    this.validateLogin(); // валидация поля логин
    this.validatePassword(); // валидация поля пароль
  };

  // Валидация поля логин
  LoginForm.prototype.validateLogin = function () {
    this.сharacters = this.$login.value.length; // количество символов введенное пользователем

    if (!this.сharacters) {
      this.message = 'Введите логин';
    } else if (this.сharacters < 3) {
      this.message = 'Логин должен быть более 2-х символов';
    } else if (this.сharacters > 12) {
      this.message = 'Логин должен быть менее 13-ти символов';
    } else {
      this.message = '';
    }

    this.alert(this.$login); // уведомление об ошибке
  };

  // Валидация поля пароль
  LoginForm.prototype.validatePassword = function () {
    this.сharacters = this.$password.value.length; // количество символов введенное пользователем

    if (!this.сharacters) {
      this.message = 'Введите пароль';
    } else if (this.сharacters < 6) {
      this.message = 'Пароль должен быть более 5-ти символов';
    } else if (this.сharacters > 18) {
      this.message = 'Пароль должен быть менее 19-ти символов';
    } else {
      this.message = '';
    }

    this.alert(this.$password); // уведомление об ошибке
  };



  window.LoginForm = LoginForm;
})();
