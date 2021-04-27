<template>
  <div class="form-wrapper">
    <h3 
      class="form__heading"
      :class="{form__heading_clickable: stage == 2, form__heading_opened: visible}"
      @click="showForm">
      {{heading}}
    </h3>
    <div class="form-block"
      v-show="visible">
      <div class="form-remove-button-wrapper" v-if="removeButton">
        <button class="btn btn_green form-remove-button"
          @click="removeForm">
          Удалить
        </button>
      </div>
      <div class="checkbox-input" v-if="showCheckbox">
        <input type="checkbox" name="samePerson" @change="double">
        <label for="samePerson">Страхователь и застрахованный - одно лицо</label>
      </div>
      <text-input
        label-text="Фамилия"
        input-name="surName"
        v-model="fields.surName"
      ></text-input>
      <text-input
        label-text="Имя"
        input-name="name"
        v-model="fields.name"
      ></text-input>
      <text-input
        label-text="Отчество"
        input-name="patrName"
        v-model="fields.patrName"
      ></text-input>
      <date-input
        label-text="Дата рождения"
        input-name="birthDate"
        v-model="fields.birthDate"
      ></date-input>
      <select-input
        label-text="Пол"
        input-name="gender"
        :options="genders"
        v-model="fields.gender"
      ></select-input>
      <text-input
        label-text="Страна"
        input-name="country"
        v-model="fields.country"
        :disabled="true">
      </text-input>
      <h3 class="form-subheader">Паспорт</h3>
      <double-input
        label-text="Серия и номер"
        input-name="passportNumber"
        v-model="fields.passportNumber">
      </double-input>
      <date-input
        label-text="Когда выдан"
        input-name="passportDate"
        v-model="fields.passportDate"
      ></date-input>
      <text-input
        label-text="Кем выдан"
        input-name="passportEmitter"
        v-model="fields.passportEmitter">
      </text-input>
      <text-input
        label-text="Код подразделения"
        input-name="passportCode"
        v-model="fields.passportCode">
      </text-input>
      <text-input
        label-text="Место рождения"
        input-name="placeOfBirth"
        v-model="fields.placeOfBirth">
      </text-input>
      <text-input
        label-text="Адрес проживания"
        input-name="customerAddress"
        v-model="fields.customerAddress">
      </text-input>
      <div v-if="mainForm" class="contact-block">
        <text-input
          label-text="Телефон"
          input-name="phone"
          v-model="phoneNumber"
        ></text-input>
        <text-input
          label-text="E-mail"
          input-name="email"
          v-model="email"
        ></text-input>
    </div>
    </div>
</div>
</template>
<script>

import DateInput from './DateInput'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import DoubleInput from './DoubleInput'
import {eventBus} from '../main'

export default {
  name: 'FormBlock',
  components: {
    DateInput,
    TextInput,
    SelectInput,
    DoubleInput,
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    heading: {
      type: String,
      default: '',
    },
    mainForm: {
      type: Boolean,
      default: false
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    removeButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      genders: {
        not: 'Не указан',
        male: 'Муж',
        female: "Жен"
      },
      fields: {
        surName: '',
        name: '',
        patrName: '',
        birthDate: {
          day: '',
          month: '',
          year: '',
          divider: '.'
        },
        gender: '',
        country: 'Россия',
        passportNumber: {
          serie: '',
          number: '',
          divider: ' '
        },
        passportDate: {
          day: '',
          month: '',
          year: '',
          divider: '.'
        },
        passportEmitter: '',
        passportCode: '',
        placeOfBirth: '',
        customerAddress: '',
      },
      phoneNumber: '',
      email: '',
      doubleData: false,
      visible: true,
      stage: 1,
      arrowUp: false
    }
  },
  mounted() { 
    this.$watch('fields', function () {
      eventBus.$emit('change', {
        id: this.id,
        fields: this.fields,
        phone: this.phoneNumber,
        email: this.email
      })
    }, {deep: true})
    eventBus.$on('proceed', () => {
      this.$emit('proceed')
    })
    eventBus.$on('double', (data) => {
      if (data && this.id === 1){
        this.fields = this.$parent.forms[0].fields
      }
    })
    eventBus.$on('change', (data) => {
      if (data && this.id === 1 && this.$parent.double === true){
        this.fields = data.fields
      }
    }),
    eventBus.$on('changeStage', (stage) => {
      this.stage = stage
      this.showForm()
    })
  },
  methods: {
    removeForm(){
      eventBus.$emit('removeForm', this.id)
    },
    double() {
      this.doubleData = !this.doubleData
      eventBus.$emit('double', this.doubleData)
    },
    showForm() {
      if (this.stage === 2){
        this.visible = !this.visible
        this.arrowUp = !this.arrowUp
      } else {
        this.visible = true
      }
    }
  }
}

</script>
<style>
  .form-block{
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    padding: 20px 27px;
    display: flex;
    flex-wrap: wrap;
  }
  .form-remove-button-wrapper{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .form__heading_clickable{
    cursor: pointer;
    text-decoration: underline;
    position: relative;
  }
  .form__heading_clickable::after{
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    background: url('../assets/down-chevron.svg') center no-repeat;
    background-size: contain;
  }
  .form__heading_opened::after{
    background: url('../assets/up-chevron.svg') center no-repeat;
    background-size: contain;
  }
  .input-block{
    width: 100%;
    position: relative;
    margin-bottom: 9px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 768px){
    .input-block{
      width: 100%;
      flex: 1 0 33%;
      padding-right: 32px;
    }
  }
  .input-block input, .input-block select{
    width: 100%;
    line-height: 27px;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
  }
  .input-block select{
    background-color: #fff;
    height: 31px;
  }
  .input-block_error input, .input-block_error select{
    border-color: red;
  }
  .input-block label{
    margin-bottom: 13px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #4B4955;
  }
  .form-subheader{
    width: 100%;
  }
  .input-error{
    position: absolute;
    bottom: 0px;
    color: red;
  }
  .contact-block{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .checkbox-input{
    width: 100%;
    margin-bottom: 19px;
  }
</style>