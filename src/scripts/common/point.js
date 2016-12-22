(() => {
  const $icon = $('.js-point-icon');
  const $close = $('.js-close');
  const padding = 40;

  $icon.click(function () {
    const targets = this;
    const $targets = $(targets);
    const $parent = $targets.parent();
    const $content = $parent.find('.screenshot__desc');

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

  $icon.parent().hover(function (e) {
    if ($(this).find('.screenshot__icon').hasClass('is-active')) {
      $(this).find('.screenshot__close').fadeIn();
    }
  }, function (e) {
    if ($(this).find('.screenshot__icon').hasClass('is-active')) {
      $(this).find('.screenshot__close').fadeOut();
    }
  });

  $close.click(function (e) {
    const $targets = $(this);

    $targets.fadeOut();
    $targets.siblings('.screenshot__desc').fadeOut(function () {
      anime({
        targets: $targets.siblings('.screenshot__icon').get(0),
        height: '40px',
        duration: 800,
        easing: 'easeOutExpo',
        complete() {
          anime({
            targets: this.targets,
            width: '40px',
            borderRadius: '50%',
            duration: 800,
            easing: 'easeOutElastic',
            complete() {
              $(this.targets).removeClass('is-active');
            }
          });
        }
      });
    });
  });
})();
