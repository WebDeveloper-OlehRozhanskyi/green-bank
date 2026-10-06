import { Swiper } from 'swiper'
import { Pagination } from 'swiper/modules'

export function slider() {
 window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
   breakpoint,
   swiperClass,
   swiperSettings,
   callback
  ) => {
   let swiper

   breakpoint = window.matchMedia(breakpoint)

   const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings)
    if (callback) {
     callback(swiper)
    }
   }

   const checker = function () {
    if (breakpoint.matches) {
     return enableSwiper(swiperClass, swiperSettings)
    } else {
     if (swiper !== undefined) swiper.destroy(true, true)
     return
    }
   }

   breakpoint.addEventListener('change', checker)
   checker()
  }

  const someFunc = instance => {
   if (instance) {
    instance.on('slideChange', function (e) {
     console.log('*** mySwiper.activeIndex', instance.activeIndex)
    })
   }
  }

  resizableSwiper('(min-width: 10px)', '.swiper', {
   modules: [Pagination],

   // navigation: {
   // 	nextEl: '.swiper-button-next',
   // 	prevEl: '.swiper-button-prev',
   // },

   pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
   },
   direction: 'horizontal', // 'vertical', 'hortzontal."
   // loop: false, // true - круговой слайдер, false - слайдер с конечными положениями
   // speed: 500, // скорость переключения слайдов
   // effect:"stider', // cards, coverflow, flip, fade, cube
   // initialstide: 1, // Начинаем со 2 слайдера // freeMode: true, // можно перетаскивать как ленту
   // slidesPerGroup: 2,
   slidesPerView: 1,
   spaceBetween: 16,
   // centeredSlides: true,
   breakpoints: {
    574: {
     slidesPerView: 2,
    },
    767: {
     slidesPerView: 3,
     spaceBetween: 16,
    },
    1023: {
     spaceBetween: 32,
     slidesPerView: 3,
    },
   },
  })
 })
}
slider()
