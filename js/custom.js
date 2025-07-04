




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


// Signature

const canvas = document.getElementById('signatureCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', e => {
      isDrawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener('mousemove', e => {
      if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    function clearSignature() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function saveSignature() {
      const dataURL = canvas.toDataURL();
      console.log('Saved Signature:', dataURL);
      alert("Signature saved! (check console)");
    }

    window.addEventListener('load', () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    });