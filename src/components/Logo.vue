<template lang="pug">
  .logo 
    img.logo__img(src="~@/assets/img/logo.svg")
    //- span.logo__text ипотечный брокер
</template>

<script>
export default {
  name: "Logo",
}
</script>

<style lang="scss">
.logo{
  margin: 11px 0 17px;
  position: relative;
  width: 190px;
  height: 72px;
  &__img{
    float: left;
  }
  &__title{
    display: block;
    text-transform: uppercase;
    color: $color-orange;
    font-family: Days;
    font-size: 23px;
    margin-top: 14px;
  }
  &__text{
    display: block;
    text-transform: uppercase;
    color: $color-green;
    font-size: 10px;
    white-space: nowrap;
    margin-top: 5px;
    position: absolute;
    left: 58px;
    top: 32px;
    letter-spacing: 1px;
    text-align: center;
  }
}
</style>
