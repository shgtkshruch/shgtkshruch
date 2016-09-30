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
        duration: 800,
        easing: 'easeInExpo',
        delay(el, index) {
          return index * 100;
        }
      });
      this.destroy();
    },
    offset() {
      return 700;
    }
  });

})();
