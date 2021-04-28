<template lang="pug">
  .form
    h2.heading.heading_orange
    form.form(action="")
      .form__group
        .form__field-block(:class="{form__field_error: $v.name.$dirty && $v.name.$invalid}" @focus="reset")
          label.form__label.form__label_required(for="name") Ваше имя
          input.form__field_required.form__field.form__field_green(type="text" name="name" placeholder="Иванов Иван Иванович" v-model="name")
        .form__field-block(:class="{form__field_error: $v.phone.$dirty && $v.phone.$invalid}" @focus="reset")
          label.form__label.form__label_required(for="phone") Телефон для связи
          input.form__field_required.form__field.form__field_green(type="text" name="phone" placeholder="89********** или +79**********" v-model="phone")
      .form__group
        .form__field-block()
          label.form__label(for="message") Ваше сообщение
          textarea.form__field.form__field_green.form__textarea(placeholder="ваше сообщение")
      .form__text Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c 
        a.link_underlined(@click="openPolicy") политикой конфиденциальности
      input.form__btn.btn.btn_green.btn_centered(type="submit" value="отправить" @click.prevent="sendForm") 
</template>

<script>
import {required, sameAs} from 'vuelidate/lib/validators'
import { eventBus } from '../main'
const checkPhone = (value) => /^\+?\d{11,11}$/.test(value)
export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      phone: '',
    }
  },
  validations: {
    name: {required: required},
    phone: {required, checkPhone},
  },
  methods: {
    openPolicy(){
      eventBus.$emit('openPolicy')
    },
    sendForm() {
        this.$v.$touch()
        if (this.$v.$error){
          return
        }
        const data = {
          type: 'small',
          content: [
          {
            "name": "Сделка от " + this.name,
            "pipeline_id":4223722,
            "_embedded":{
              "contacts":[
                  {
                    "name": this.name,
                    "custom_fields_values":[
                        {
                          "field_id":829811,
                          "values":[
                              {
                                "value": this.phone
                              }
                          ]
                        },
                    ]
                  }
              ],
            },
          }
        ]
        } 
        eventBus.$emit('sendForm', data)
    },
    reset() {
      this.$v.$reset()
    },
  }
}
</script>

<style lang="scss">
.form{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 810px;
  &__group{
    @media screen and(min-width: $tablets){
      flex-basis: 50%;
      max-width: 380px;
    }
  }
  &__field-block{
    width: 100%;
    min-width: 300px;
    &_check{
      @media screen and(min-width: $tablets){
        order: 4;
      }
    }
    @media screen and(min-width: $tablets){
      margin-right: 14px;
      flex: 1 0 33%;
      margin-bottom: 0;
    }
  }
  &__label{
    position: relative;
    font-weight: 700;
    font-size: 14px;
    color: $color-grey;
    &_required{
      &::after{
        content: '*';
        color: red;
        position: absolute;
        right: -10px;
      }
    }
  }
  &__field{
    margin-top: 10px;
    outline: none;
    &_green{
      border: 3px solid $color-green;
      border-radius: 11px;
      padding: 14px 0px 15px 24px;
      margin-bottom: 16px;
      width: 100%;
      color: $color-grey;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
      &::-webkit-input-placeholder{
        color: $color-light-grey;
      }
      &::-moz-placeholder{
        color: $color-light-grey;
      }
    }
    &_error .form__field{
      border: 3px solid red;
      color: red;
      &::-webkit-input-placeholder{
        color: red;
      }
      &::-moz-placeholder{
        color: red;
      }
    }
    &_error .form__check{
      border: 3px solid red;
      border-radius: 5px;
    }
    @media screen and(min-width: $tablets){
      
    }
  }
  &__textarea{
    height: 153px;
  }
  &__text{
    text-align: center;
  }
  &__btn{
    margin-top: 14px!important;
  }
  &__check{
    color: $color-orange;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    margin-bottom: 16px;
    padding: 5px;
    @media screen and(min-width: $tablets){
      order: 4;
      margin-top: 15px;
    }
  }
  @media screen and(min-width: $tablets) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>