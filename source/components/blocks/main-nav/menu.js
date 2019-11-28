'use strict';

(function () {
  var Menu = function Menu (selector) {
    this.$el = selector;

    try {
      this.$toggle = this.$el.querySelector('.main-nav__toggle');
      this.start();
    } catch (e) {
      console.error('Меню не существует. Указан не верный селектор меню.');
    }
  };

  // Изменяет поведение меню
  Menu.prototype.active = function () {
    if (this.$el.classList.contains('main-nav--nojs')) {
      this.$el.classList.remove('main-nav--nojs');
    }
  };

  // Открывает меню
  Menu.prototype.open = function () {
    this.$el.classList.remove('main-nav--close');
    this.$el.classList.add('main-nav--open');
  };

  // Закрывает меню
  Menu.prototype.close = function () {
    this.$el.classList.remove('main-nav--open');
    this.$el.classList.add('main-nav--close');
  };

  // Запуск логики
  Menu.prototype.start = function () {
    this.active();
    this.$toggle.addEventListener('click', function () {
      if (this.$el.classList.contains('main-nav--close')) {
        this.open();
      } else {
        this.close();
      }
    }.bind(this));
  };

  window.Menu = Menu;
})();
