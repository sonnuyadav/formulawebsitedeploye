AOS.init();

$('.counter').countUp(); 

 /* Set the width of the side navigation to 340px */
 function openNav() {
    document.getElementById('mySidenav').style.width = "320px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById('mySidenav').style.width = "0";
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
}

$(function(){
  
    var swiper = new Swiper('.carousel-gallery .swiper-container', {
      effect: 'slide',
      speed: 900,
      slidesPerView: 5,
      spaceBetween: 20,
      simulateTouch: true,
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: '.carousel-gallery .swiper-pagination',
        clickable: true
      },
      breakpoints: {
    
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },
  
        425: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20
        }
        
      }
    }); /*http://idangero.us/swiper/api/*/ 
  
 

  var swiper = new Swiper('.carousel-gallery-csr .mySwiper', {
    effect: 'slide',
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    pagination: {
      el: '.carousel-gallery-csr .swiper-pagination',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
  $(document).ready(function() {
   
    //Vertical Tab
    $('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});

$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL_Xm3IOv8MhAnqlntUFTSIEO43aih8LmO" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

 jQuery(document).ready(function($) {

     "use strict";

   

  




 });