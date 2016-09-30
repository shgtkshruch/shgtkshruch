(() => {
  'use strict';

  new Waypoint({
    element: document.querySelector('.skill'),
    handler(diration) {
      anime({
        targets: '.skill__bar',
        width(el) {
          return el.dataset.width;
        },
        duration: 600,
        easing: 'easeInExpo',
        delay(el, index) {
          return index * 150;
        }
      });
      this.destroy();
    },
    offset() {
      return 1000;
    }
  });

})();
