




// ----------------- Owl Slider JS Start -----------------

$(document).ready(function () {
  var owl = $('.owl-carousel.testimonialSlider');

  owl.owlCarousel({
    margin: 35,
    nav: false, // Hide default navigation
    dots: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2,margin: 15, },
      1000: { items: 2 },
    }
  });

  // Custom navigation buttons
  $('.custom-prev-btn').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.custom-next-btn').click(function () {
    owl.trigger('next.owl.carousel');
  });
});




// ----------------- Owl Slider JS End -----------------  





// ----------------- Sticky header Js Start -----------------  


window.onscroll = function () { myFunction() };

var header = document.getElementById("header");
var sticky = 450; 

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// ----------------- Sticky header Js end -----------------














