var mySwiper01 = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

var mySwiper02 = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})







// let currentSlide = 0;
// const init = (slides, dots, n) => {
//   console.log(slides, 1123)
//   // console.log(dots)
//   // console.log(n)
//   slides.forEach((slide, index) => {
//     slide.style.display = "none";
//     dots.forEach((dot, index) => {
//       dot.classList.remove("active");
//     })
//   })

//   slides[n].style.display = "block";
//   dots[n].classList.add("active");

//   dots.forEach((dot, i) => {
//     dot.addEventListener("click", () => {
//       console.log(i)
//       init(i);
//       currentSlide = i;
//       // console.log(currentSlide, 345566);
//     })
//   })
// }
// const next = () => {
//   currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
//   init(currentSlide);
// }

// const prev = () => {
//   currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
//   init(currentSlide);
// }

// // setInterval(() => {
// //   next();
// // }, 3000);


// // const home_slides = document.querySelectorAll(".home .slide__content");
// // const home_gallery_slides = document.querySelectorAll(".home-gallery .slide__content");
// // const home_post_slides = document.querySelectorAll(".home-post .slide__content");
// const service_slides = document.querySelectorAll(".service-slide .slide__content");
// // const home_dots = document.querySelectorAll('.home .dot');
// // const home_post_dots = document.querySelectorAll('.home-post .dot');
// const secrvice_dots = document.querySelectorAll('.service-slide .dot');

// // document.addEventListener("DOMContentLoaded", init(home_slides, home_dots, currentSlide));
// // document.addEventListener("DOMContentLoaded", init(home_gallery_slides, home_dots, currentSlide));
// document.addEventListener("DOMContentLoaded", init(service_slides, secrvice_dots, currentSlide));


// // document.querySelector(".next").addEventListener('click', next);

// // document.querySelector(".prev").addEventListener('click', prev);

