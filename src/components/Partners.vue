<template lang="pug">
  .block_white#partners
    .container
      .heading.heading_orange наши ПАРТНЕРЫ
      .partners.swiper-container
        .swiper-wrapper
          - for (var i = 1; i <= 8; i++)
            .partners__item.swiper-slide
              a.partners__link(@click="popupOpen(i)")
                img(src="~@/assets/img/partners_" + i +".jpg")
        .swiper-pagination(slot="pagination")
        .slider-button.slider-button_prev.slider-button_prev_green.partners__prev
        .slider-button.slider-button_next.slider-button_next_green.partners__next
</template>

<script>
import {eventBus} from '../main'
import Swiper from 'swiper'
export default {
  name: 'Partners',
  mounted() {
    const width = window.innerWidth
    let numberSlides = 1
    if (width > 565 && width < 768) {
      numberSlides = 2
    } else if (width >= 768 && width < 1024){
      numberSlides = 3
    } else if (width >= 1024) {
      numberSlides = 4
    }
    // eslint-disable-next-line
    const partnersSlider = new Swiper('.partners', {
      slidesPerView: numberSlides,
      spaceBetween: 48,
      pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet_active'
          },
          navigation: {
            nextEl: '.partners__next',
            prevEl: '.partners__prev',
          },
          loop: true,
    })
  },
  methods: {
    popupOpen(i) {
      eventBus.$emit('showLicence', i)
    }
  }
}
</script>

<style lang="scss">
  .partners{
    &__item{
      display: flex;
      justify-content: center;
    }
    &__link{
      cursor: pointer;
    }
    &__prev{

    }
    &__next{
      
    }
  }
</style>