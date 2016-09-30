(() => {
  'use strict';

  new Waypoint({
    element: document.querySelector('.timeline'),
    handler(diration) {
      $('.timeline').addClass('is-active')
    },
    offset() {
      return this.element.clientHeight / 2
    }
  });

})();
