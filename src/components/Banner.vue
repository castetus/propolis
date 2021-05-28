<template lang="pug">
  .block_pink
    h2.heading.heading_green Наша услуга бесплатна. Нам платят страховые компании. 
    .container
      .banner
        p.banner__text Оплата полиса происходит на сайте страховой компании, которую Вы выберете. 
        p.banner__text Полис оформляется онлайн и придет Вам на почту. Ехать за ним не нужно. 
        p.banner__text На полисы нет наценок. Мы продаем полисы дешевле, чем страховые компании.
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style>
.banner{
  width: 100%;
  
}
  .banner__text{
    text-align: center;
  }
</style>