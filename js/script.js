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
  
  // EMVIO DE EMAIL FORMULARIO

  
  const $form = document.querySelector('#form')
  const $buttonMailto = document.querySelector('#trucazo')

  $form.addEventListener('submit', handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:carlosidestefanis@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
  }