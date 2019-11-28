'use strict';

(function () {
  var HaircutForm = function (elem) {
    window.Form.call(this, elem);
    this.$name = this.$inputs.name;
    this.$phone = this.$inputs.phone;
  };

  HaircutForm.prototype = Object.create(window.Form.prototype);
  HaircutForm.prototype.constructor = HaircutForm;

  // Событие отправки формы
  HaircutForm.prototype.onSubmitForm = function (evt) {
    window.Form.prototype.onSubmitForm.call(this); // логика родителя

    evt.preventDefault();
    var rand = Math.floor(Math.random() * 2);
    rand ? new window.NoticeModal(true) : new window.NoticeModal();
  };

  // Событие валидации формы
  HaircutForm.prototype.onValidateForm = function () {
    this.validateName();
    this.validatePhone();
  };

  HaircutForm.prototype.validateName = function () {
    this.сharacters = this.$name.value.length; // количество символов введенное пользователем

    if (!this.сharacters) {
      this.message = 'Введите ваше имя';
    } else if (this.сharacters < 2) {
      this.message = 'Имя должено быть более 1-х символа';
    } else if (this.сharacters > 12) {
      this.message = 'Имя должен быть менее 13-ти символов';
    } else {
      this.message = '';
    }

    this.alert(this.$name); // уведомление об ошибке
  };

  HaircutForm.prototype.validatePhone = function () {
    this.сharacters = this.$phone.value.length; // количество символов введенное пользователем

    if (!this.сharacters) {
      this.message = 'Введите ваше телефон';
    } else if (this.сharacters < 2) {
      this.message = 'Телефон должен быть более 1-го символа';
    } else if (this.сharacters > 8) {
      this.message = 'Телефон должен быть менее 9-ти символов';
    } else {
      this.message = '';
    }

    this.alert(this.$phone); // уведомление об ошибке
  };

  window.HaircutForm = HaircutForm;
})();
