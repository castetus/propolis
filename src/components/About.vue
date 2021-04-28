<template lang="pug">
  .block_white#about
    .container 
      h2.heading.heading_green об услуге
      .about.swiper-container
        .swiper-wrapper.about__wrapper(ref="wrapper")
          .swiper-slide(v-for="(item, index) in items" :key="index")
            .about__item(:class="'about__item_' + (index + 1)"  ref="slide")
              .about__number-field(:class="'about__number-field_' + (index + 1)")
                span.about__number {{item.number}}
              img.about__icon(:src="bgPath(index + 1)" :class="'about__icon_' + (index + 1)")
              .about__content(:class="'about__content_' + (index + 1)")
                h4.about__title {{item.title}}
                p.about__text {{item.text}}
        .slider-button.slider-button_prev.about__prev
        .slider-button.slider-button_next.about__next
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'About',
  data() {
    return {
      items: [
        {
          title: 'В 2 раза дешевле',
          text: 'Специалист по ипотечному страхованию оформит для вас полис в 2 раза дешевле, чем в Сбербанке',
          number: '01',
        },
        {
          title: 'ТОП-10',
          text: 'Мы сотрудничаем со страховыми компаниями, входящими в ТОП-10',
          number: '02'
        },
        {
          title: '5+ лет',
          text: 'Наш опыт работы - более пяти лет',
          number: '04'
        },
        {
          title: 'Экономия 30-50%',
          text: 'Экономия на полисе для Сбербанка - до 50%, на полисах для других банков - до 30%',
          number: '03'
        }
      ]
    }
  },
  mounted() {
    const width = window.innerWidth
    if (width >= 768){
      this.$refs.slide.forEach(elem => elem.classList.remove('swiper-slide'))
      this.$refs.wrapper.classList.remove('swiper-wrapper')
    } else {
      this.items = this.items.sort((prev, next) => prev.number - next.number)
    }
      // eslint-disable-next-line
      const aboutSlider = new Swiper('.about', {
        navigation: {
          nextEl: '.about__next',
          prevEl: '.about__prev',
        },
        loop: true
      })
  },
  methods: {
    bgPath(id){
      return require(`../assets/img/icon_${id}.svg`)
    }
  }
}
</script>

<style lang="scss">
  .about{
    max-width: 660px;
    max-height: 660px;
    &__wrapper{
      @media screen and (min-width: $tablets){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 25px;
      }
    }
    &__item{
      height: 233px;
      width: 233px;
      margin: 0 auto;
      padding: 15px 34px 34px 15px;
      position: relative;
      border: 3px solid $color-orange;
      @media screen and (min-width: $tablets) {
        height: 308px;
        width: 308px;
        padding: 34px;
      }
      &_1, &_4{
        border-top-right-radius: 50%;
        border-bottom-left-radius: 50%;
      }
      &_2, &_3{
        border-top-left-radius: 50%;
        border-bottom-right-radius: 50%;
      }
      &_3{
        order: 2;
      }
      &_4 {
        order: 1;
      }
    }
    &__icon{
      position: absolute;
      width: 50px;
      height: 40px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      @media screen and (min-width: $tablets){
        width: 60px;
        height: 50px;
      }
      &_1{
        bottom: 10%;
        left: 30%;
      }
      &_2{
        bottom: 10%;
        right: 30%;
      }
      &_3{
        top: 10%;
        left: 30%;
      }
      &_4{
        top: 10%;
        right: 30%;
      }
    }
    &__number-field{
      position: absolute;
      width: 125px;
      height: 125px;
      background-color: $color-orange;
      &_1{
        right: 0;
        bottom: 0;
        border-top-left-radius: 100%;
        & .about__number{
          right: 25px;
          bottom: 20px;
        }
      }
      &_2{
        left: 0;
        bottom: 0;
        border-top-right-radius: 100%;
        & .about__number{
          left: 25px;
          bottom: 20px;
        }
      }
      &_3{
        right: 0;
        top: 0;
        border-bottom-left-radius: 100%;
        & .about__number{
          right: 25px;
          top: 20px;
        }
      }
      &_4{
        left: 0;
        top: 0;
        border-bottom-right-radius: 100%;
        & .about__number{
          left: 25px;
          top: 20px;
        }
      }
    }
    &__number{
      position: absolute;
      color: #fff;
      font-size: 48px;
      font-weight: 900;
    }
    &__content{
      color: $color-grey;
      margin-top: 20px;
      @media screen and (min-width: $tablets){
        margin-top: 35px;
      }
      &_2{
        margin-left: 60px;
      }
      &_3{
        margin-left: 20px;
      }
      &_4{
        margin-left: 60px;
      }
      &_3, &_4{
        margin-top: 88px;
      }
    }
    &__title{
      margin-bottom: 5px;
      font-size: 12px;
      @media screen and (min-width: $tablets){
        font-size: 14px;
      }
    }
    &__text{
      font-size: 12px;
      margin-top: 0;
      @media screen and (min-width: $tablets){
        font-size: 14px;
      }
    }
    &__prev{
      @media screen and (min-width: $tablets){
        display: none;
      }
    }
    &__next{
      right: 13px;
      @media screen and (min-width: $tablets){
        display: none;
      }
    }
  }
</style>