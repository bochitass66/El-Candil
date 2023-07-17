var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
  
    // Cambiar la clase de la imagen del logo
    if (scroll >= 100) {
      $('.navbar-brand img').addClass('logo-scroll');
    } else {
      $('.navbar-brand img').removeClass('logo-scroll');
    }
  });



  document.addEventListener("DOMContentLoaded", function () {
    var sliders = {};

    // Inicializar todos los sliders
    var swiper1 = new Swiper(".trending-slider[data-slider-id='slider1']", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

    var swiper2 = new Swiper(".trending-slider[data-slider-id='slider2']", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

    // Guardar los sliders en un objeto
    sliders.slider1 = swiper1;
    sliders.slider2 = swiper2;

    // Obtener los botones
    var buttons = document.querySelectorAll(".btn-slider");

    // Agregar evento de clic a cada botón
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var sliderId = button.getAttribute("data-slider-id");
        var slider = sliders[sliderId];

        if (slider) {
          // Cambiar al slider correspondiente
          slider.slideTo(0);
        }
      });
    });
  });