(() => {
  'use strict';

  $('.skill').waypoint(function (diration) {
    anime({
      targets: '.skill__bar',
      width(el) {
        return el.dataset.width;
      },
      duration: 600,
      easing: 'easeInExpo',
      delay(el, index) {
        return index * 150;
      },
      complete() {
        $('.skill__item').addClass('is-active');
      }
    });
    this.destroy();
  }, {
    offset: '80%'
  });

})();
