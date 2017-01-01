(() => {
  'use strict';

  inView('.contact')
    .once('enter', () => {
      anime({
        targets: '.contact__item',
        rotateY: 360,
        opacity: 1,
        duration: 3000,
        delay(el, index) {
          return index * 250;
        }
      });
    });

  const $title = $('.contact').siblings('.section__heading')
  const $titleInner = $title.find('.section__headingInner');
  const $icon = $('.contact__icon');
  const duration = 300;
  const easing = 'linear';

  // 初期化処理
  $title.css({
    overflow: 'hidden',
    height: $title.height()
  });

  $titleInner.css({
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  });

  $icon.hover(function () {
    const text = $(this).siblings('.contact__text').text();

    // hover animation中はanimationしない
    // 同じアイコンにhoverしていたらアニメーションしない
    if ($title.find('.section__clone').length > 0 ||
      $title.text() === text)
    return;

    anime({
      // 元のタイトル要素は下にスクロールアウト
      targets: $title.find('.section__headingInner').get(0),
      translateX: '-50%',
      translateY: '100%',
      duration,
      easing,
      begin() {
        // テキストを書き換えたタイトルのクローンを作る
        $titleInner
          .clone()
          .addClass('section__clone')
          .css({
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -100%)'
          })
          .text(text)
          .appendTo($title);
        // クローンは上からスクロールインしてくる
        anime({
          targets: '.section__clone',
          translateX: ['-50%', '-50%'],
          translateY: ['-100%', 0],
          duration,
          easing
        });
      },
      complete() {
        // 後処理
        // 元の要素を削除して、クローン要素を元あった要素にする
        $title
          .find(':not(.section__clone)').remove()
          .end()
          .find('.section__clone').removeClass('section__clone');
      }
    });
  });

})();
