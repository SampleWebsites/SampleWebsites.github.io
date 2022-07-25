// Swipe script
const swiper = new Swiper('.swiper', {
    // for auto
    autoplay: {
        delay: 3000,
        disableOnInteraction:false,
    },

    loop: true,

    // page animation
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Nav arrow
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 