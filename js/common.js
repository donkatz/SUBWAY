$(document).ready(function () {

    //    $(".menu > ul > li").mouseover(function () {
    //        $(".menu > ul > li > ul, ul.submenu::after").stop().slideDown(200);
    //    });
    //    $(".menu > ul > li").mouseout(function () {
    //        $(".menu > ul > li > ul, ul.submenu::after").stop().slideUp(200);
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

    var Tab = $(".tab > ul > li");
    var tabCon = $(".SMslide > div");
    
    tabCon.hide().eq(0).show();
    
    Tab.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        Tab.removeClass(".active");
        target.addClass(".active");
        tabCon.css("display","none");
        tabCon.eq(index).css("display","block");
    })
    


    var swiper = new Swiper('.swiper-container', {
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
