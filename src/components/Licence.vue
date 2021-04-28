<template lang="pug">
  .swiper-container.licence 
    .swiper-wrapper 
      img.swiper-slide(v-for="img in images" :src="img", alt="")
    .slider-button.slider-button_prev.main-slider__prev
    .slider-button.slider-button_next.main-slider__next
</template>

<script>
import Swiper from 'swiper'
import {eventBus} from '../main'
export default {
  name: 'Licence',
  props: ['images'],
  mounted() {
    setTimeout(() => {
      const licenceSlider = new Swiper('.licence', {
        loop: true,
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },
      })
    }, 500)
    eventBus.$on('destroyLicence', () => {
      this.$destroy()
    })
  },
  beforeDestroy(){
    console.log(this.images)
  },
  methods: {

  }
}
</script>

<style>

</style>