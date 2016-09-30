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
        duration: 1000,
        easing: 'easeInOutExpo',
        elasticity: 1000,
        delay(el, index) {
          return index * 200;
        }
      });
      this.destroy();
    },
    offset() {
      return this.element.clientHeight / 2
    }
  });

})();
