'use strict';

(function () {
  var Slide = function (selector) {
    this.$el = selector;
    this.indexActiveSlide = 0;

    try {
      this.$slides = this.$el.querySelectorAll('.slide__item');
      this.$toggles = this.$el.querySelectorAll('.slide__toggle');

      this.checkSlideToggle();
    } catch (e) {
      console.error('Не удалось найти необходимые элементы на странице. Проверьте наличие .slide__item и .slide__toggle');
    }

    try {
      this.$togglePrev = this.$el.querySelector('.slide__toggle-btn--prev');
      this.$toggleNext = this.$el.querySelector('.slide__toggle-btn--next');

      this.checkSlideButton();
    } catch (e) {
      //
    }
  };

  // Индекс слайда
  Slide.prototype.getIndexSlide = function (elem) {
    var $siblings = elem.parentElement.children;
    return Array.prototype.indexOf.call($siblings, elem);
  };

  // Переключатели слайдов
  Slide.prototype.checkSlideToggle = function () {
    this.action(this.$toggles, function (toggle) {
      toggle.addEventListener('click', function (evt) {
        var target = evt.target;
        this.indexActiveSlide = this.getIndexSlide(target);

        this.deactive(this.$slides);
        this.deactive(this.$toggles);
        this.active();

      }.bind(this));
    }.bind(this));
  };

  // Переключатели слайдов вперед - назад
  Slide.prototype.checkSlideButton = function () {
    var countSlides = this.$slides.length -1;
    this.indexActiveSlide = 0;

    this.action(this.$slides, function (slide) {
      if (slide.classList.contains('active')) {
        this.indexActiveSlide = this.getIndexSlide(slide);
      }
    }.bind(this));


    this.$togglePrev.addEventListener('click', function () {
      if (--this.indexActiveSlide < 0) {
        this.indexActiveSlide = countSlides;
      }

      this.deactive(this.$slides);
      this.deactive(this.$toggles);
      this.active(this.indexActiveSlide);
    }.bind(this));


    this.$toggleNext.addEventListener('click', function () {
      if (++this.indexActiveSlide > countSlides) {
        this.indexActiveSlide = 0;
      }

      this.deactive(this.$slides);
      this.deactive(this.$toggles);
      this.active();
    }.bind(this));
  };

  // Применяет к списку элементов заданную функцию
  Slide.prototype.action = function (elements, cb) {
    [].map.call(elements, cb);
  };

  // Активирует слайд
  Slide.prototype.active = function () {
    this.$slides[this.indexActiveSlide].classList.add('active');
    this.$toggles[this.indexActiveSlide].classList.add('active');
  };

  // Деактивирует слайд
  Slide.prototype.deactive = function (items) {
    this.action(items, function (item) {
      item.classList.remove('active');
    });
  };

  window.Slide = Slide;
})();
