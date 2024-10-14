

$(function() {
  // 페이지 로드 시 초기 클래스 설정
  if ($(window).scrollTop() >= 800) {
      $('header').addClass('fixed-header');
  }

  $(window).scroll(function() {
      const scrollTop = $(window).scrollTop();

      // 헤더 고정 처리
      if (scrollTop >= 800) {
          $('header').addClass('fixed-header');
      } else {
          $('header').removeClass('fixed-header');
      }

      // 애니메이션 처리
      if (scrollTop >= 1500) {
          $('.img_area.animate__animated').addClass('animate__fadeInLeftBig');
          $('.text_area.animate__animated').addClass('animate__fadeInRightBig');
      } else {
          $('.img_area.animate__animated').removeClass('animate__fadeInLeftBig');
          $('.text_area.animate__animated').removeClass('animate__fadeInRightBig');
      }
  });
});

// Swiper 초기화
var publishingSwiper = new Swiper(".publishing_list", {
  speed: 1500,
  pagination: {
      el: ".swiper-pagination",
      type: "fraction",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

var designSwiper = new Swiper(".design_list, .design_list2", {
  slidesPerView: 'auto',
  spaceBetween: 50,
  grabCursor: true,
  speed: 5000,
  autoplay: {
      delay: 0,
      disableOnInteraction: false,
  },
  loop: true,
  centeredSlides: true, // 슬라이드 중앙 정렬
});
