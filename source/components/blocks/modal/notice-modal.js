'use strict';

(function () {
  var NoticeModal = function (status) {
    window.Modal.call(this, this.getModal(status));

    this.start();
  };

  NoticeModal.prototype = Object.create(window.Modal.prototype);
  NoticeModal.prototype.construct = NoticeModal;

  NoticeModal.prototype.start = function () {
    window.Modal.prototype.start.call(this);

    this.overlay.insertAdjacentElement('beforebegin', this.$modal);
  };

  NoticeModal.prototype.getModal = function (status) {
    return status ? this.success() : this.error();
  };

  NoticeModal.prototype.template = function (title, text, close) {
    var template = document.querySelector('#notice').content;
    console.log(template);
    var node = template.cloneNode(true);
    var modal = node.querySelector('.modal');

    var titleElem = node.querySelector('.modal__title');
    var descElem = node.querySelector('.modal__desc');
    var closeElem = node.querySelector('.modal__close');

    titleElem.textContent = title;
    descElem.textContent = text;
    closeElem.textContent = close;

    return modal;
  };

  NoticeModal.prototype.success = function () {
    return this.template('Это успех!', 'Ваша заявка отправлена. Ожидайте, мы свяжемся с вами как только будет минутка.', 'Закрыть окно');
  };

  NoticeModal.prototype.error = function () {
    return this.template('Неудача', 'Что-то пошло не так. Проверьте выделенные красным поля формы.', 'Ок');
  };

  window.NoticeModal = NoticeModal;
})();
