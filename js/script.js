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
  
  // ENVIO DE EMAIL FORMULARIO 2

  const $form = document.querySelector('#form')

  $form.addEventListener('submit', handleSubmit)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    })
    if (response.ok) {
      this.reset()
      swal("Gracias por contactarte con nosotros", "Pronto estaremos en contacto", "success");
    }
  }