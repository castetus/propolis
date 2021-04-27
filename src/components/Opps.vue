<template lang="pug">
  .block_pink#opps
    .container
      .heading.heading_green ПРЕИМУЩЕСТВА
      .opps
          .opps__item(v-for="item in items" :key="item.title")
            .opps__title {{item.title}}
            .opps__text {{item.text}}
</template>

<script>
export default {
  name: 'Opps',
  data() {
    return {
      items: [
        {
          title: '7 полисов',
          text: 'СТРАХОВАНИЯ ИПОТЕКИ ОФОРМЛЯЕМ КАЖДЫЙ ДЕНЬ'
        },
        {
          title: '50%',
          text: 'ЭКОНОМИЯ НА ПОЛИСЕ'
        },
        {
          title: '5 лет',
          text: 'УСПЕШНОЙ РАБОТЫ'
        },
        {
          title: '75 000 р.',
          text: 'ЭКОНОМЯТ КЛИЕНТЫ С НАМИ ЕЖЕДНЕВНО'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
  .opps{
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    @media screen and (min-width: $tablets) {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 40px;
    }
    &__item{
      max-width: 223px;
      color: $color-grey;
      margin-bottom: 27px;
    }
    &__title{
      text-align: center;
      font-size: 24px;
      margin-bottom: 16px;
      font-weight: 700;
      @media screen and (min-width: $tablets){
        font-size: 40px;
        margin-bottom: 20px;
      }
    }
    &__text{
      text-align: center;
      text-transform: uppercase;
      font-size: 14px;
    }
  }
</style>