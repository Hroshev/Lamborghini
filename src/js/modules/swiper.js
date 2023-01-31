import Swiper from "swiper/bundle";

const swiper = new Swiper(".blog__slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-rigth",
    prevEl: ".swiper-button-left",
  },
});