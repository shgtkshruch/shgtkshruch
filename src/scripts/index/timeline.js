(() => {
  'use strict';

  inView('.timeline')
    .once('enter', el => {
      $(el).addClass('is-active');
    });

})();
