<template lang="pug">
  header 
    .container 
      .header 
        logo
        .header__cta 
          a.btn.btn_outlined.btn_centered.btn_popup(data-target="#popup-form" @click="popupOpen('ContactForm')") заказать полис
        ul.contacts 
          li.contacts__item.contacts__item_phone
            a.link(href="tel:+78003334749") 8 800 333-47-49
          li.contacts__item
            | Бесплатный звонок
            br
            | по России
          li.contacts__item.contacts__item_email
            a.link(href="mailto:info@pro-policy.ru") info@pro-policy.ru
        button.header__menu-button#dropdown(@click="menuOpen")
</template>

<script>
import Logo from "./Logo"
import Contacts from "./Contacts"
import {eventBus} from "../main.js"
export default {
  name: "Header",
  components: {
    Logo,
    Contacts,
  },
  methods: {
    menuOpen() {
      eventBus.$emit('menuOpen')
    },
    popupOpen(elem){
      eventBus.$emit('popupOpen', elem)
    }
  },

}
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  &__slogan {
    font-size: 20px;
    padding: 0 10px;
    text-align: center;
    @media screen and(min-width: $desktop) {
      font-size: 20px;
      flex: 1 0 25%;
    }
  }
  &__menu-button {
    width: 45px;
    height: 43px;
    position: absolute;
    bottom: 27px;
    right: 2px;
    border: 2px solid $color-orange;
    border-radius: 2px;
    background: url("~@/assets/~@/assets/img/icons/menu.svg") center no-repeat;
    background-size: 45%;
    @media screen and(min-width: $tablets) {
      display: none;
    }
  }
  @media screen and(min-width: $tablets) {
    justify-content: space-between;
    flex-direction: row;
    height: 115px;
  }
  &__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__note {
    display: none;
    font-size: 14px;
    @media screen and(min-width: $desktop) {
      display: block;
    }
  }
}
</style>
