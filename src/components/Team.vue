<template lang="pug">
  .block_pink#team
    .container
      .h2.heading.heading_2.heading_green сотрудники
      .team.swiper-container
        .swiper-wrapper
          .team__item.swiper-slide
            .team__item-wrapper
              .team__img-block
                img.team__avatar(src="../assets/img/team_1.jpg")
              .team__content
                h3.team__position Ваш специалист
                h4.team__name Антон Храмов
                p.team__text Выпускник Санкт-Петербургского государственного Инженерно-Экономического университета (ИНЖЭКОН), работал агентом в "Петербургской недвижимости", руководителем корпоративных проектов в IT-компании Рексофт. Основатель первой в России велокурьерской службы Prompt Delivery.
              .btn.btn_centered.btn_orange.team__btn(@click="popupOpen('ContactForm')") заказать полис
</template>

<script>
import {eventBus} from '../main'
export default {
  name: 'Team',
  methods: {
    popupOpen(elem){
      eventBus.$emit('popupOpen', elem)
    }
  }
}
</script>

<style lang="scss">
  .team{
    width: 100%;
    @media screen and (min-width: $tablets){
      margin-top: 40px;
    }
    &__item{
      display: flex;
      flex-direction: column;
      @media screen and (min-width: $tablets){
        flex-direction: row;
        background-color: #fff;
        border: 1px solid $color-light-grey;
        padding: 17px;
      }
    }
    &__item-wrapper{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (min-width: $tablets){
        border: 1px solid $color-light-grey;
        padding: 17px 106px;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        align-items: flex-start;
      }
    }
    &__img-block{
      display: flex;
      height: 324px;
      @media screen and (min-width: $tablets){
        flex-basis: 50%;
      }
    }
    &__avatar{
      width: 100%;
      object-fit: cover;
      object-position: top;
      margin: 16px auto;
    }
    &__content{
      max-width: 250px;
      color: $color-grey;
      @media screen and (min-width: $tablets){
        flex-basis: 50%;
        max-width: 100%;
      }
    }
    &__position{
      text-align: center;
      font-size: 24px;
      // margin: 0;
      @media screen and (min-width: $tablets){
        font-size: 36px;
        margin: 16px 0 0;
        text-align: left;
      }
    }
    &__name{
      text-align: center;
      font-size: 18px;
      @media screen and (min-width: $tablets){
        text-align: left;
      }
    }
    &__text{
      font-size: 14px;
    }
    &__btn{
      @media screen and (min-width: $tablets){
        // flex-basis: 100%;
        order: 3;
      }
    }
  }
</style>