(() => {
  'use strict';

  $('.js-slick-personal').slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '25%',
    dots: true,
    prevArrow: '.js-slick-prev--personal',
    nextArrow: '.js-slick-next--personal',
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false
      }
    }]
  });

  $('.js-slick-commerce').slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '25%',
    dots: true,
    prevArrow: '.js-slick-prev--commerce',
    nextArrow: '.js-slick-next--commerce',
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false
      }
    }]
  });

})();
