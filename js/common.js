$(document).ready(function () {

    //    $(".menu > ul > li").mouseover(function () {
    //        $(".submenu > div > ul").stop().slideDown(200);
    //    });
    //    $(".menu > ul > li").mouseout(function () {
    //        $(".submenu > div > ul").stop().slideUp(200);
    //    });


    function fun() {
        var num = 0;
        var result;
        setInterval(function () {
            result = num * -1920;
            num++;
            console.log(result);
            if (num == 4) {
                num = 0;
            }
            $(".slider").stop().animate({
                left: result + 'px'
            });
        }, 5000);
    }
    fun();

    $(".tabBtn li").on("click", function () {
        var data = $(this).attr("data-rel");
        var $content = $("." + data);
        $(this).addClass("on", "acitive").siblings().removeClass("on", "acitive");
        $content.show().siblings().hide();
    });

    var swiper = new Swiper('.tab-con .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        pagination: {
            el: '.swiper-pagination'
        },
    });

});
