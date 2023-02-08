import Swiper from "swiper/bundle";

const swiper = new Swiper(".blog__slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-rigth",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // 992: {
    //   slidesPerView: 4,
    //   spaceBetween: 30,
    // },
  },
});