$(document).ready(function () {
    $(".m-s-menu > .submenu div").hide();
    $(".m-s-menu").mouseover(function () {
        $(".m-s-menu > .submenu div").stop().slideDown(200);
    });
    $(".m-s-menu").mouseout(function () {
        $(".m-s-menu > .submenu div").stop().slideUp(200);
    });

    
    var swiper = new Swiper(".slider", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".pagination",
          clickable: true,
        },
      });

    $(".tab-btn li").on("click", function () {
        var data = $(this).attr("data-rel");
        var $content = $("." + data);
        $(this).addClass("on actived_tab").siblings().removeClass("on actived_tab");
        $content.show().siblings().hide();
    });

    var swiper01 = new Swiper ('.tab-con01 > .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
    
    var swiper02 = new Swiper ('.tab-con02 > .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        
    });
    
    var swiper03 = new Swiper ('.tab-con03 > .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
    
    var swiper04 = new Swiper ('.tab-con04 > .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });

});
