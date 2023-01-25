var swiper = new Swiper('#swiper-1', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesOffsetBefore: 0,
    speed: 800,
    // spaceBetween: '8%',
    slidesPerView: 1.5,
    centeredSlides: true,
    paginationClickable: true,
    effect: 'coverflow',
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 3,
      slideShadows : false
    },
    autoplay: 
    {
      delay: 3000,
    },
    loop: true,
    keyboard: {
        enabled: true,
    },
    simulateTouch: true,
    mousewheelControl: true
  });
  $(document).ready(function(){
    
   $('.swiper-wrapper .swiper-slide:not(.swiper-slide-active)').on('click', function(e){
      e.preventDefault();
      swiper.slideTo($(this).index());
      return false;
   });
  });