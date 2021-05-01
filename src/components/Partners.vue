<template lang="pug">
  .block_white#partners
    .container
      .heading.heading_orange наши ПАРТНЕРЫ
      .partners.swiper-container
        .swiper-wrapper
            .partners__item.swiper-slide(v-for="item in sortedPartners" :key="item.id")
              a.partners__link(@click="showLicence(item.id)")
                img(:src="path(item.id)")
        .swiper-pagination(slot="pagination")
        .slider-button.slider-button_prev.slider-button_prev_green.partners__prev
        .slider-button.slider-button_next.slider-button_next_green.partners__next
</template>

<script>
import {eventBus} from '../main'
import Swiper from 'swiper'
export default {
  name: 'Partners',
  data() {
    return{
      partners: [
        {
          id: 1,
          sort: 1,
          name: 'ingos'
        },
        {
          id: 2,
          sort: 5,
          name: 'reso'
        },
        {
          id: 3,
          sort: 2,
          name: 'vsk'
        },
        {
          id: 4,
          sort: 3,
          name: 'renessans'
        },
        {
          id: 5,
          sort: 6,
          name: 'alfa'
        },
        {
          id: 6,
          sort: 7,
          name: 'soglasie'
        },
        {
          id: 7,
          sort: 4,
          name: 'yougoria'
        },
        {
          id: 8,
          sort: 8,
          name: 'granta'
        },
      ]
    }
  },
  computed: {
    sortedPartners(){
      return this.partners.sort((prev, next) => prev.sort - next.sort)
    }
  },
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
    path(index) {
      return require(`../assets/img/partners_${index}.jpg`)
    },
    showLicence(i) {
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