<template lang="pug">
  .block_white#payment
    .container
      .heading.heading_orange ОПЛАТА И ЭТАПЫ ОФОРМЛЕНИЯ
      .payment
        img(:src="version")

</template>

<script>
export default {
  name: 'Payment',
  data() {
    return {
      ver: 'mobile',
    }
  },
  computed: {
    version() {
      return require(`../assets/img/payment_${this.ver}.jpg`)
    }
  },
  mounted() {
    const width = window.innerWidth
    if (width >= 768){
      this.ver = 'desktop'
    }
  },
  methods: {
    // version() {
    //   return require(`../assets/img/payment_${this.version}.jpg`)
    // }
  }
}
</script>

<style lang="scss">
  .payment{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px auto 0;
    @media screen and (min-width: $tablets) {
      margin-top: 55px;
    }
  }
</style>