$(document).ready(function(){
       
    $('.slider').slick({
        slidesToShow: 1 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        accessibility: true,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
          ]
    });
    /* $('.slider2').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
    }); */
});

$(function(){
  $(".grid").masonry({ itemSelector: ".grid-item" });
  
  $(".filtering").on("click", "span", function () {
      var a = $(".gallery").isotope({});
      var e = $(this).attr("data-filter");
      a.isotope({ filter: e });
  });
  $(".filtering").on("click", "span", function () {
      $(this).addClass("active").siblings().removeClass("active");
  });
})
/*  */

$('.slider-for').slick({
  slidesToShow: 1.5,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  infinite: true,
 
  prevArrow: true,
  nextArrow: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  infinite: false,
  dots: false,
  centerMode: false,
/*   focusOnSelect: true, */
});


