<template lang="pug">
      ul.contacts 
        li.contacts__item.contacts__item_phone
          a.link(href="tel:+78003334749") 8 800 333-47-49
        li.contacts__item.contacts__item_thin
          //- span ООО "СБ ТУР"
          //- br
          span ИНН: 7814776170
          br
          span ОГРН: 1207800065252
          br
          span Санкт-Петербург, 
          br
          span ул. Большая Пушкарская, д.17, оф.3
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss">
.contacts {
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style-type: none;
  padding-left: 0;
  color: $color-green;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  // margin-top: 16px;
  margin-block-start: 0;
  &__item {
    position: relative;
    margin-bottom: 5px;
    &_phone {
      padding-left: 21px;
      & .link{
        position: relative;
        &:before {
        content: "";
        background: url("~@/assets/img/icons/call.svg") center no-repeat;
        background-size: contain;
        position: absolute;
        left: -20px;
        width: 15px;
        height: 15px;
      }
      }
    }
    &_insta {
      padding-left: 14px;
      &:before {
        content: "";
        background: url("~@/assets/img/icons/instagram.svg") center no-repeat;
        background-size: contain;
        position: absolute;
        left: 33px;
        top: 0;
        width: 13px;
        height: 13px;
        @media screen and (min-width: $tablets) {
          left: 60px;
        }
      }
    }
    &_email{
      padding-left: 14px;
      & .link{
        position: relative;
        &:before {
        content: "";
        background: url("~@/assets/img/icons/email.svg") center no-repeat;
        background-size: contain;
        position: absolute;
        left: -20px;
        width: 15px;
        height: 15px;
      }
      }
    }
    &_thin{
      font-weight: 400;
    }
  }
  @media screen and (min-width: $tablets) {
    text-align: right;
    margin-left: 10px;
  }
}
</style>