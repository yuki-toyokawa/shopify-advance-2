$(function () {
  (function () {

    // トップページ メインビジュアルスライダー
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      effect: 'fade',
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    var flag = false; // １回だけ発火するため

    $(window).scroll(function () {
      $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
        var elemPos = $(this).offset().top + 300; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
          $(this).addClass('bgappear'); // 画面内に入ったらbgappearというクラス名を追記

        } else {
          if (!flag) { // １回だけ発火するため 
            flag = true; // １回だけ発火するため 
            $(this).removeClass('bgappear'); // 画面外に出たらbgappearというクラス名を外す
          }
        }
      });
      $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
        var elemPos = $(this).offset().top + 300; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
          $(this).addClass('bgLRextend'); // 画面内に入ったらbgLRextendというクラス名を追記
        } else {
          if (!flag) { // １回だけ発火するため 
            flag = true; // １回だけ発火するため 
            $(this).removeClass('bgLRextend'); // 画面外に出たらbgLRextendというクラス名を外す
          }
        }
      });
    });

  })();

})