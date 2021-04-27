<template lang="pug">
      ul.contacts 
        li.contacts__item.contacts__item_phone
          a.link(href="tel:+78003331257") 8 800 333-12-57
        li.contacts__item
          | Бесплатный звонок
          br
          | по России
        //- li.contacts__item.contacts__item_insta
        //-   a.link(href="") meditel
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
  margin-top: 16px;
  &__item {
    position: relative;
    margin-bottom: 5px;
    &_phone {
      padding-left: 21px;
      &:before {
        content: "";
        background: url("~@/assets/img/icons/call.svg") center no-repeat;
        background-size: contain;
        position: absolute;
        left: 2px;
        width: 15px;
        height: 15px;
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
  }
  @media screen and (min-width: $tablets) {
    text-align: right;
    margin-left: 10px;
  }
}
</style>