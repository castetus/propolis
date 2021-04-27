<template lang="pug">
  nav.menu#menu(:class="{menu_visible: isVisible, menu_hidden: !isVisible}")
    .container.container_no-padding
      .menu__header 
        img.menu__logo(src="~@/assets/img/logo.svg")
        button.menu__button.btn_close#close-menu(@click="menuClose")
      ul.menu__list
          li.menu__item(v-for="(value, key) in menuItems" :key="key") 
            a.link.menu__link(:href="value") {{key}}
</template>

<script>
import {eventBus} from "../main"
export default {
  name: 'Menu',
  data() {
    return {
      menuItems: {
        'ОБ УСЛУГЕ': '#about', 'ПРЕИМУЩЕСТВА': '#opps', 'КАЛЬКУЛЯТОР': '#calc', 'НАШИ ПАРТНЕРЫ': '#partners', 'ОПЛАТА': '#payment', 'сотрудники': '#team', 'ОТЗЫВЫ': '#testimonials', 'ЧАСТЫЕ ВОПРОСЫ': '#faq'
      },
      isVisible: false
    }
  },
  mounted() {
    eventBus.$on('menuOpen', () => {
      this.menuOpen()
    }),
    eventBus.$on('close', () => {
      this.isVisible = false
    })
  },
  methods: {
    menuOpen() {
      this.isVisible = true
    },
    menuClose() {
      eventBus.$emit('close')
      this.isVisible = false
    }
  }
}
</script>

<style lang="scss">
.menu{
  display: none;
  position: absolute;
  top: 0;
  background-color: #fff;
  transition: all 0.4s linear;
  z-index: 2000;
  &__header{
    width: 100%;
    @media screen and (min-width: $tablets){
      display: none;
    }
  }
  &__logo{
    width: 233px;
    padding: 15px 0 0 22px;
  }
  &__button{
    float: right;
  }
  &__list{
    width: 100%;
    list-style-type: none;
    padding-left: 0px;
    margin: 16px 0 7px;
    @media screen and (min-width: $tablets){
      display: flex;
      justify-content: space-between;
    }
  }
  &__item{
    border: 1px solid $color-light-grey;
    color: $color-orange;
    border-bottom: none;
    padding: 17px 0px 18px 21px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    &:last-child{
      border-bottom: 1px solid $color-light-grey;
      @media screen and (min-width: $tablets){
        border: none;
      }
    }
    @media screen and (min-width: $tablets){
      margin-top: -15px;
      border: none;
      font-size: 12px;
      color: $color-grey;
    }
  }
  &__link{
    white-space: nowrap;
  }
  &_visible{
    display: block;
    right: 0;
    animation: menuAnimation 0.4s linear forwards;
  }
  &_hidden{
    animation: menuAnimationReverse 0.4s linear forwards;
  }
  @media screen and (min-width: $tablets){
    position: static;
    background-color: $color-pink;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 86px;
  }
}

@keyframes menuAnimation{
  0%{
    right: -335px;
  }
  100%{
    right: 0px;
  }
}
@keyframes menuAnimationReverse{
  0%{
    right: 0px;
  }
  100%{
    right: -335px;
    display: none;
  }
}
</style>