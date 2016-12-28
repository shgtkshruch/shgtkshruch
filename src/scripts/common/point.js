(() => {
  inView('.js-point')
    .on('enter', (el) => {
      const $el = $(el);

      if ($el.css('visibility') === 'visible') return;

      $(el)
        .css({visibility: 'visible'})
        .hide()
        .fadeIn(800);
    });

})();
