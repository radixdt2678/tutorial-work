$(document).ready(function(){
       
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        accessibility: true,
        adaptiveHeight: true,
    });
    $('.slider2').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
    });
});