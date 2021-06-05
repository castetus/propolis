<template lang="pug">
  .slider 
    .container_full-width
      .main-slider.swiper-container
        .swiper-wrapper
          .main-slider__slide.swiper-slide(v-for="slide in slides" :key="slide.id")
              picture.main-slider__picture
                source(:srcset="pathBig(slide.id)" media="(min-width: 575px)")
                img.main-slider__img(:src="pathSmall(slide.id)", alt="")
              .main-slider__mask
              .container.container_absolute
                .main-slider__text 
                  p {{slide.text}}
                a.btn.btn_orange.main-slider__button.btn_popup(href="#calculator") рассчитать стоимость
        .swiper-pagination(slot="pagination")
        .slider-button.slider-button_prev.main-slider__prev
        .slider-button.slider-button_next.main-slider__next
      a.btn.btn_orange.main-slider__bottom-btn.btn_popup(href="#calculator") рассчитать стоимость
</template>

<script>
import Swiper from 'swiper'
import {eventBus} from "../main.js"
export default {
  name: 'mainSlider',
  data() {
    return {
      slides: [
        {
          id: 1,
          text: 'Страховой полис для ипотеки в Сбербанке в 2 раза дешевле – это реально!',
        },
        {
          id: 2,
          text: 'Оформление ипотечного полиса страхования онлайн всего за 1 час без посещения офиса в вашем городе',
        },
        {
          id: 3,
          text: 'Хотите оформить страховой полис для ипотеки в любом банке по выгодной цене без посещения офиса?',
        },
      ],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mainSlider.$swiper
    }
  },
  mounted() {
    // eslint-disable-next-line
    const mainSlider = new Swiper('.main-slider', {
      pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet_active'
          },
          navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev',
          },
          loop: true,
           autoplay: {
            delay: 4500,
          },
    })
  },
  methods: {
    pathBig(id){
      return require(`../assets/img/banner_${id}.jpg`)
    },
    pathSmall(id){
      return require(`../assets/img/banner_${id}_s.jpg`)
    },
  }
}
</script>

<style lang="scss">
.main-slider{
  // margin-bottom: 16px;
  max-height: 500px;
  &__slide{
    position: relative;
  }
  &__picture{
    position: relative;
  }
  &__img{
    width: 100%;
  }
  &__text{
    position: absolute;
    max-width: 264px;
    top: 45px;
    left: calc(50% - 117px);
    letter-spacing: 1px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    @media screen and (min-width: $tablets) {
      top: 0;
      left: 43px;
      width: 50%;
      max-width: 465px;
      font-size: 32px;
      line-height: 39px;
      color: $color-grey;
    }
    @media screen and (min-width: $desktop){
      top: 86px;
    }
  }
  &__mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.4);
    @media screen and (min-width: $desktop){
      display: none;
    }
  }
  &__button{
    display: none!important;
    position: absolute;
    bottom: 81px;
    @media screen and (min-width: $desktop){
      left: 43px;
      display: block!important;
    }
  }
  &__bottom-btn{
    margin: 20px auto;
    @media screen and (min-width: $desktop){
      display: none!important;
    }
  }
  &__prev{
    left: 13px!important;
  }
  &__next{
    right: 13px!important;
  }
}
</style>