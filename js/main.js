// $(function() {
//   // 페이지 로드 시 초기 클래스 설정
//   if ($(window).scrollTop() >= 800) {
//       $('header').addClass('fixed-header');
//   }

//   $(window).scroll(function() {
//       const scrollTop = $(window).scrollTop();

//       // 헤더 고정 처리
//       if (scrollTop >= 800) {
//           $('header').addClass('fixed-header');
//       } else {
//           $('header').removeClass('fixed-header');
//       }

//       // 애니메이션 처리
//       if (scrollTop >= 1500) {
//           $('.img_area.animate__animated').addClass('animate__fadeInLeftBig');
//           $('.text_area.animate__animated').addClass('animate__fadeInRightBig');
//       } else if (scrollTop < 1500) {
//           $('.img_area.animate__animated').removeClass('animate__fadeInLeftBig');
//           $('.text_area.animate__animated').removeClass('animate__fadeInRightBig');
//       }
//   });
// });
// var swiper = new Swiper(".publishing_list", {
//   speed: 1500,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// var swiper = new Swiper(".design_list", {
//   slidesPerView: 'auto',
//   spaceBetween: 50,
//   grabCursor: true,
//   speed: 5000,
//   autoplay: {
//     delay:0,
//     disableOnInteraction: false,
//   },
//   loop: true,
//   centeredSlides: true,  // 슬라이드 중앙 정렬
// });


// var swiper = new Swiper(".design_list2", {
//   slidesPerView: 'auto',
//   spaceBetween: 50,
//   grabCursor: true,
//   speed: 5000,
//   autoplay: {
//     delay:0,
//     disableOnInteraction: false,
//   },
//   loop: true,
//   centeredSlides: true,  // 슬라이드 중앙 정렬
// });

// $(document).ready(function() {
//   // 모든 모달 숨기기
//   $('.design_modal > div').hide();

//   // 슬라이드 클릭 이벤트
//   $('.open_modal').on('click', function(e) {
//       e.preventDefault(); // 기본 링크 동작 방지
      
//       const modalId = $(this).attr('id'); // 클릭한 요소의 id 가져오기
//       $('.design_modal > div').fadeOut(300); // 모든 모달을 페이드 아웃
//       $('.design_modal .' + modalId).fadeIn(300); // 해당 모달만 페이드 인
//   });

//   // 모달 닫기 버튼 클릭 이벤트
//   $('.close').on('click', function() {
//       $(this).closest('div').fadeOut(300); // 현재 모달을 페이드 아웃
//   });
// });

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

// $(document).ready(function() {
//   // 모든 모달 숨기기
//   $('.design_modal > div').hide();

//   // 슬라이드 클릭 이벤트
//   $('.open_modal').on('click', function(e) {
//       e.preventDefault(); // 기본 링크 동작 방지
//       // console.log('클릭')
//       const modalId = $(this).attr('id'); // 클릭한 요소의 id 가져오기
    
//       console.log( $('.design_modal .' + modalId))
//       $('.design_modal').fadeOut(300); // 모든 모달을 페이드 아웃
//       $('.modal_contents .' + modalId).fadeIn(300); // 해당 모달만 페이드 인
//   });

//   // 모달 닫기 버튼 클릭 이벤트
//   $('.close').on('click', function() {
//       $(this).closest('div').fadeOut(300); // 현재 모달을 페이드 아웃
//   });
// });
$(document).ready(function() {
 
    // 모든 모달 숨기기
    $('.design_modal > div').fadeOut();

    // 슬라이드 클릭 이벤트
    $('.open_modal').on('click', function(e) {
        e.preventDefault(); // 기본 링크 동작 방지

        const modalId = $(this).attr('id'); // 클릭한 요소의 id 가져오기

        $('.design_modal .' + modalId).fadeIn(300);
    });

    // 모달 닫기 버튼 클릭 이벤트
    $('.close').on('click', function() {
        $(this).closest('div').fadeOut(300); // 현재 모달을 페이드 아웃
    });
    // 모달 영역 바깥 클릭 시 모달 닫기
  $('.design_modal .modal_contents').click(function(event) {
    if ($(event.target).is('.design_modal .modal_contents')) {
      $('.design_modal .modal_contents').fadeOut(300);
    }
  });
});