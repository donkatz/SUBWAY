$(document).ready(function () {

            $(".m-s-menu").mouseover(function () {
                $(".m-s-menu > .submenu div").stop().slideDown(200);
            });
            $(".m-s-menu").mouseout(function () {
                $(".m-s-menu > .submenu div").stop().slideUp(200);
            });

//    $(".m-s-menu > .submenu div").hide();
//    $(".m-s-menu").mouseover(function () {
//        $(".m-s-menu > .submenu div").fadeIn().sldieDown(200);
//    });
//    $(".m-s-menu").mouseout(function () {
//        $(".m-s-menu > .submenu div").hide().slideUp(200);
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

    $(".tab-btn li").on("click", function () {
        var data = $(this).attr("data-rel");
        var $content = $("." + data);
        $(this).addClass("on", "actived_tab").siblings().removeClass("on", "actived_tab");
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
            el: '.pagination'
        },
    });

});
