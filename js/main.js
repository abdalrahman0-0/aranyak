// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

var swiper = new Swiper('.swiper-container', {
  // Existing configuration
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// var swiper = new Swiper('.swiper-container', {
//   spaceBetween: 32,
//   loop: true,
//   loopedSlides: 5,
//   breakpoints: {
//     0: {
//       slidesPerView: 1
//     },
//     768: {
//       slidesPerView: 2
//     },
//     1024: {
//       slidesPerView: 3
//     }
//   }
// });
