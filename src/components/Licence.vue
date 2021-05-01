<template lang="pug">
  .swiper-container.licence 
    .swiper-wrapper 
      img.swiper-slide(v-for="img in dataImages" :src="img", alt="")
    .slider-button.slider-button_prev.main-slider__prev
    .slider-button.slider-button_next.main-slider__next
</template>

<script>
import Swiper from 'swiper'
import {eventBus} from '../main'
export default {
  name: 'Licence',
  props: ['images'],
  data() {
    return{
      dataImages: []
    }
  },
  mounted() {
    setTimeout(() => {
      const licenceSlider = new Swiper('.licence', {
        loop: true,
        navigation: {
          nextEl: '.slider-button_next',
          prevEl: '.slider-button_prev',
        },
      })
    }, 500)
    if (!this.dataImages.length){
      this.dataImages = this.images
    }
    eventBus.$on('licencePath', (images) => {
      this.dataImages = images
    })
  },
}
</script>

<style>

</style>