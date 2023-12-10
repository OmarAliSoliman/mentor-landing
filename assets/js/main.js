$(document).ready(function () {
  // choses-slider

  AOS.init();

  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".testemonia-cards-slider").length) {
    $(".testemonia-cards-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      rtl: currentDir == "rtl" ? true : false,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 20,
      depth: 150,
      modifier: 1.5,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  $('.counter').counterUp({
    time: 1000
  });


  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".navbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "0.8");
    } else {
      $(".navbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

});
