$(window).scroll(function(){
    if ($(window).scrollTop() >= 800) {
        $('header').addClass('fixed-header');
     }
     else {
        $('header').removeClass('fixed-header');
     }
})



var swiper = new Swiper(".publishing_list", {
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


var swiper = new Swiper(".design_list", {
  slidesPerView: 'auto',
  spaceBetween: 50,
  grabCursor: true,
  speed: 5000,
  autoplay: {
    delay:0,
    disableOnInteraction: false,
  },
  loop: true,
  centeredSlides: true,  // 슬라이드 중앙 정렬
});


var swiper = new Swiper(".design_list2", {
  slidesPerView: 'auto',
  spaceBetween: 50,
  grabCursor: true,
  speed: 5000,
  autoplay: {
    delay:0,
    disableOnInteraction: false,
  },
  loop: true,
  centeredSlides: true,  // 슬라이드 중앙 정렬
});