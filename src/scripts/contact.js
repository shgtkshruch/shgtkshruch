(() => {
  'use strict';

  new Waypoint({
    element: document.querySelector('.contact'),
    handler(diration) {
      anime({
        targets: '.contact__item',
        rotateY: 360,
        opacity: 1,
        duration: 3000,
        delay(el, index) {
          return index * 250;
        }
      });
      this.destroy();
    },
    offset() {
      return 800;
    }
  });

})();
