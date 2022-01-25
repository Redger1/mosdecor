const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

const worksSwiper = new Swiper('.works__swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'coverflow',
    // effect: 'cards',
    loop: true,

    navigation: {
        nextEl: '.works__swiper-button-next',
        prevEl: '.works__swiper-button-prev',
      }
});

// document.addEventListener('DOMContentLoaded', ()=>{
//     document.querySelector('.swiper-slide-next').addEventListener("mouseover", ()=>{
//         console.log('123')
//         // document.querySelector('.swiper-slide-next').style.cursor = `url('../assets/slider/works_slider_arrow_right') 16 16, pointer;`;
//     })
// });
