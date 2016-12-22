(() => {
  const $icon = $('.js-point-icon');
  const padding = 40;

  $icon.click(function () {
    const targets = this;
    const $targets = $(targets);
    const $content = $(targets).next();

    $content.show();
    const width = $content.width() + padding * 2;
    const height = $content.height() + padding * 2;
    $content.hide();

    anime({
      targets,
      width,
      borderRadius: '3px',
      duration: 800,
      easing: 'easeInElastic',
      complete(el) {
        $targets.addClass('is-active');
        anime({
          targets,
          height,
          duration: 800,
          easing: 'easeInExpo',
          complete() {
            $content.fadeIn();
          }
        });
      }
    });

  });
})();
