$(document).ready(function(){
       
    $('.slider').slick({
        slidesToShow: 2,
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
    
});
/*  */



  var swiper1 = new Swiper(".mySwiper", {
    /* autoplay: {
        delay: 5000,
    }, */
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*  */
  $(".slick-slider").slick({
    slidesToShow: 2,
    infinite:false,
    accessibility: true,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: false,    
    autoplaySpeed: 2000,
    infinite: true,
      // dots: false, Boolean
     // arrows: false, Boolean
   });
   /*  */


/* streams */

var streamsSlider = new Swiper('[data-slider="true"]', {
  autoplay: false,
  loop:true,
  // pagination: {
  //     el: '[data-streams-pagination]',
  //     clickable: true,
  // },
  navigation: {
      nextEl: '[data-next]',
      prevEl: '[data-prev]',
  },
  slidesPerView: 1,
spaceBetween: -80,
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      350: {
          slidesPerView: 2,
      },
      750: {
          slidesPerView: 3,
      }
  }
});


