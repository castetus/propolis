<template lang="pug">
  .swiper-container.policy 
    .swiper-wrapper 
      img.swiper-slide(v-for="index in 6" :key="index" :src="getImgPath(index)", alt="")
    .slider-button-prev 
    .slider-button-next
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Policy',
  data() {
    return {
      basePath: 'policy_pages-to-jpg-000'
    }
  },
  mounted() {
    setTimeout(() => {
      // eslint-disable-next-line
      const policySlider = new Swiper('.policy', {
        loop: true,
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
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