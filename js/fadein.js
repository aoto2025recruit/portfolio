// //スクロール時に要素をフェードインさせるイベントを設定する
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight+50){
              $(this).addClass('active');
            }
        });
    });
});

$(function(){
    $(window).scroll(function (){
        $('.fadein_150').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight+50){
                $(this).delay(150).queue(function(){
                    $(this).addClass('active');
                });
            }
        });
    });
});
