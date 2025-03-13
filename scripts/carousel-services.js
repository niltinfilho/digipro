var servicesSwiper = new Swiper(".servicesSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  effect: "slide",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  navigation: {
    nextEl: ".services-navigation-container .swiper-button-next",
    prevEl: ".services-navigation-container .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      effect: "slide",
    },
    1024: {
      slidesPerView: 1.3,
      centeredSlides: true,
    }
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  preventInteractionOnTransition: true,
  a11y: {
    prevSlideMessage: 'Slide anterior',
    nextSlideMessage: 'Próximo slide',
    firstSlideMessage: 'Este é o primeiro slide',
    lastSlideMessage: 'Este é o último slide',
    paginationBulletMessage: 'Ir para o slide {{index}}',
  }
});

// Inicializa as animações após o carregamento da página
window.addEventListener('load', function () {
  // Adiciona classe para ativar animações no slide inicial
  setTimeout(function () {
    const activeSlide = document.querySelector('.servicesSwiper .swiper-slide-active');
    if (activeSlide) {
      activeSlide.classList.add('animated');
    }

    // Ajusta a posição dos botões de navegação em dispositivos desktop
    if (window.innerWidth >= 1024) {
      const serviceCards = document.querySelector('.service-card');
      if (serviceCards) {
        const cardHeight = serviceCards.offsetHeight;
        const navButtons = document.querySelectorAll('.services-navigation-container .swiper-button-next, .services-navigation-container .swiper-button-prev');
        navButtons.forEach(button => {
          button.style.top = (cardHeight / 2) + 'px';
        });
      }
    }
  }, 500);
});

// Adiciona eventos para animações suaves durante as transições
servicesSwiper.on('slideChangeTransitionStart', function () {
  // Remove a classe animated de todos os slides
  document.querySelectorAll('.servicesSwiper .swiper-slide').forEach(function (slide) {
    slide.classList.remove('animated');
  });
});

servicesSwiper.on('slideChangeTransitionEnd', function () {
  // Adiciona a classe animated apenas ao slide ativo
  const activeSlide = document.querySelector('.servicesSwiper .swiper-slide-active');
  if (activeSlide) {
    activeSlide.classList.add('animated');
  }
});