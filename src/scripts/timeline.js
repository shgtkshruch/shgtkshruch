(() => {
  'use strict';

  $('.timeline').waypoint(function (diration) {
    $('.timeline').addClass('is-active');
    this.destroy();
  }, {
    offset: '80%'
  });

})();
