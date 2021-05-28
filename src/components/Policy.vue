<template lang="pug">
  .swiper-container.policy 
    .swiper-wrapper 
      img.swiper-slide(v-for="index in 6" :key="index" :src="getImgPath(index)", alt="")
    .slider-button.slider-button_prev.main-slider__prev
    .slider-button.slider-button_next.main-slider__next
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Policy',
  data() {
    return {
      basePath: 'policy_page-000'
    }
  },
  mounted() {
    setTimeout(() => {
      // eslint-disable-next-line
      const policySlider = new Swiper('.policy', {
        loop: true,
        navigation: {
          nextEl: '.slider-button_next',
          prevEl: '.slider-button_prev',
        },
      })
    }, 200);
  },
  methods: {
    getImgPath(index){
      return require('../assets/img/' + this.basePath + index + '.jpg')
    }
  }
}
</script>

<style>

</style>