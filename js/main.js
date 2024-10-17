

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
                $('.sub_nav').addClass('fixed-header');
            } else {
                $('header').removeClass('fixed-header');
                $('.sub_nav').removeClass('fixed-header');
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


    $(function () {
        $('header > nav').each(function () {
            const $nav = $(this);
            const $anchor = $nav.find('nav > ul > li > a');
            const $sub = $nav.find('.sub_nav');
            let hideTimeout; // 서브 메뉴 숨김을 지연시키기 위한 변수

            // 마우스 오버 처리
            $nav.find('> ul > li').on('mouseover', function () {
                const $this = $(this);
                const $submenu = $this.find('.sub_nav');

                if ($submenu.length) {
                    clearTimeout(hideTimeout); // 숨김 지연 취소
                    $anchor.removeClass('active');
                    $this.find('> a').addClass('active'); // 현재 링크에 active 클래스 추가

                    $sub.hide(); // 다른 서브 메뉴 숨김
                    $submenu.stop(true, true).fadeIn(); // 현재 서브 메뉴 표시
                }
            });

            // 마우스가 서브 메뉴에서 벗어났을 때 처리
            $nav.on('mouseleave', function () {
                hideTimeout = setTimeout(function () {
                    $sub.stop(true, true).fadeOut(); // 서브 메뉴 숨김
                    $anchor.removeClass('active'); // 모든 링크의 active 클래스 제거
                }, 300); // 200ms 지연 후 서브 메뉴 숨김
            });

            // 서브 메뉴에 마우스가 있을 때는 숨기지 않도록 처리
            $sub.on('mouseover', function () {
                clearTimeout(hideTimeout); // 숨김 지연 취소
            });
        });
    });


