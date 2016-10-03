(() => {
  'use strict';

  $('.work').waypoint(function (diration) {
    anime({
      targets: '.work__item',
      translateY: ['300%', 0],
      duration: 1000,
      delay(el, index) {
        return index * 250;
      }
    });
    this.destroy();
  }, {
    offset: '50%'
  });

})();
