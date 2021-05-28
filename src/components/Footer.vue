<template lang="pug">
  footer.footer#footer
    .container 
      .footer__wrapper
        .footer__block
          img.footer__logo(src="~@/assets/img/logo.svg", alt="med-tele.ru")
          ul.footer__menu
            li.footer__menu-item 
              a.footer__menu-link.link.btn_popup(@click.prevent="open('Policy')") Политика конфиденциальности
            li.footer__menu-item 
              a.footer__menu-link.link.btn_popup(@click.prevent="showLicences") Лицензия
        .footer__block
          h6.footer__title Мы работаем со всеми регионами России
          p.footer__text Внимание! Данный сайт носит исключительно информационный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского Кодекса РФ. (с) 2017-2021
        .footer__block
          .footer__contacts-wrapper
            contacts
        .footer__block
          .footer__contacts-wrapper
            ul.contacts
              li.contacts__item.contacts__item_phone 
                a.link(href="tel:+79967917901") 8 (996) 791-79-01
              li.contacts__item.contacts__item_email
                a.link(href="mailto:info@pro-policy.ru") info@pro-policy.ru
              li.contacts__item.contacts__item_thin Часы работы:
              li.contacts__item.contacts__item_thin будние дни 8:00-21:00
              li.contacts__item.contacts__item_thin выходные дни 9:00-19:00
    //- .container
    //-   span.text_green.text_center (c) Прополис 2021
      
</template>

<script>
import Contacts from './Contacts'
import { eventBus } from '../main'
export default {
  name: 'AppFooter',
  components: {
    Contacts
  },
  methods: {
    open(elem){
      eventBus.$emit('popupOpen', elem)
    },
    showLicences(){
      eventBus.$emit('showAllLicences')
    }
  }
}
</script>

<style lang="scss">
.footer{
  background-color: $color-pink;
  &__wrapper{
    width: 100%;
    padding: 28px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: $tablets) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
  &__block{
     @media screen and (min-width: $tablets){
       flex-direction: column;
       align-items: center;
       flex: 1 0 25%;
       margin-top: 50px;
       &:first-child{
         margin-top: 0;
       }
     }
  }
  &__logo{
    max-width: 233px;
    margin-bottom: 35px;
  }
  &__menu{
    list-style-type: none;
    padding-left: 0px;
    margin-top: -2px;
  }
  &__menu-item{
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 7px;
    color: $color-grey;
  }
  &__menu-link{
    text-decoration: underline;
    &:hover{
      text-decoration: none;
    }
  }
  &__title{
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    color: $color-orange;
    text-align: center;
  }
  &__text{
    margin-bottom: 35px;
    font-size: 12px;
    text-align: center;
    max-width: 477px;
  }
  &__contacts-wrapper{
    height: 100%;
    font-size: 12px;
  }
  &__contacts-wrapper .contacts{
    font-size: 12px;
  }
  &__copyright{
    font-size: 12px;
    font-weight: 600;
    color: $color-green;
    float: right;
    margin-top: -10px;
  }
  &__licence-text{
    font-size: 8px;
  }
}
</style>