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
/* $(function(){
  $(".grid").masonry({ itemSelector: ".grid-item" });
  
  $(".filtering").on("click", "span", function () {
      var a = $(".gallery").isotope({});
      var e = $(this).attr("data-filter");
      a.isotope({ filter: e });
  });
  $(".filtering").on("click", "span", function () {
      $(this).addClass("active").siblings().removeClass("active");
  });
}) */
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
    autoplaySpeed: 2000
      // dots: false, Boolean
     // arrows: false, Boolean
   });
   /*  */

/* var popovers = document.querySelectorAll('.popover');
var popoverTriggers = document.querySelectorAll('.popover__trigger');

for (var i = 0; i < popoverTriggers.length; i++) {
	popoverTriggers[i].addEventListener('click', function(event) {
		closeAllOthers(this.parentElement);
		this.parentElement.classList.toggle('popover--active');
	});
}

function closeAllOthers(ignore) {
	for (var i = 0; i < popovers.length; i++) {
		if ( popovers[i] !== ignore) {
			popovers[i].classList.remove('popover--active');	
		}
	}
} */
/* $(function() {
  $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
}); */

/* $('.play-button').click(function(e){
  var iframeEl = $('<iframe>', { src: $(this).data('url') });
  $('#youtubevideo').attr('src', $(this).data('url'));
})

$('#close-video').click(function(e){
  $('#youtubevideo').attr('src', '');
}); 

$(document).on('hidden.bs.modal','#myModal', function () {
  $('#youtubevideo').attr('src', '');
}); */ 
