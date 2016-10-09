(() => {
  'use strict';

  $('.section--work').waypoint(function (diration) {
    anime({
      targets: '.work',
      translateY: ['200%', 0],
      duration: 2000
    });
    this.destroy();
  }, {
    offset: '30%'
  });

  $('#js-slick').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
  });


})();
