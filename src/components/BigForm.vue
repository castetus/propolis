<template>
  <div class="big-form">
    <h3 class="form-subheader">Страхуемые риски</h3>
    <div class="input-block">
      <div class="input">
        <input type="checkbox" name="life" id="" v-model="life" @change="$v.life.$touch()">
        <label for="life">Жизнь</label>
      </div>
      <div class="input">
        <input type="checkbox" name="property" id="" v-model="property" @change="$v.property.$touch()">
        <label for="life">Имущество</label>
      </div>
      <div class="input-error" v-if="($v.life.$dirty && $v.life.$invalid) || ($v.property.$dirty && $v.property.$invalid)">
        отметьте хотя бы одну опцию
      </div>
    </div>
    <h3 class="form-subheader">Кредитный договор</h3>
    <text-input 
      label-text="Номер кредитного договора"
      inputName="contractNumber"
      v-model="contractNumber">
    </text-input>
    <date-input
      label-text="Дата кредитного договора"
      inputName="contractDate"
      v-model="contractDate">
    </date-input>
    <div class="input">
      <input type="checkbox" name="noNumber" id="" v-model="noNumber">
      <label for="noNumber">Еще нет номера кредитного договора</label>
    </div>
    <h3 class="form-subheader">Покупатель полиса (страхователь, заемщик)</h3>
    <text-input
      label-text="ФИО"
      inputName="name"
      v-model="name">
    </text-input>
    <div class="input-block">
      <div class="input">
        <input type="radio" name="gender" id="genderMale" v-model="gender" value="male">
        <label for="genderMale">Муж</label>
      </div>
      <div class="input">
        <input type="radio" name="gender" id="genderFemale" v-model="gender" value="female">
        <label for="genderFemale">Жен</label>
      </div>
      <div class="input-error" v-if="$v.gender.$dirty && $v.gender.$invalid">
        выберите пол заемщика
      </div>
    </div>
    <h3 class="form-subheader">Ваш паспорт РФ</h3>
    <double-input
      label-text="Серия и номер"
      inputName="passportNumber"
      v-model="passportNumber">
    </double-input>
    <date-input
      label-text="Дата выдачи"
      inputName="passportDate"
      v-model="passportDate">
    </date-input>
    <text-input 
      label-text="Кем выдан"
      inputName="passportEmitter"
      v-model="passportEmitter">
    </text-input>
    <text-input 
      label-text="Код подразделения"
      inputName="passportCode"
      v-model="passportCode">
    </text-input>
    <text-input 
      label-text="Место рождения"
      inputName="birthPlace"
      v-model="birthPlace">
    </text-input>
    <h3 class="form-subheader">Адрес регистрации</h3>
    <text-input
      label-text="Полный адрес (город, улица, дом, строение, квартира)" 
      inputName="registerAddress"
      v-model="registerAddress"
      @input="sameAddress">
    </text-input>
    <h3 class="form-subheader">Адрес объекта</h3>
    <input type="checkbox" name="isSameAddress" id="" v-model="isSameAddress" @change="sameAddress">
    <label for="isSameAddress">Совпадает с адресом регистрации</label>
    <text-input
      label-text="Полный адрес (город, улица, дом, строение, квартира)" 
      inputName="objectAddress"
      v-model="objectAddress">
    </text-input>
    <h3 class="form-subheader">Контактные данные</h3>
    <text-input
      label-text="Электронная почта" 
      inputName="email"
      v-model="email">
    </text-input>
    <p>На указанную эл.почту мы вышлем вам электронную версию полиса и уведомление об оплате</p>
    <text-input
      label-text="Номер телефона"
      inputName="phone"
      v-model="phone">
    </text-input>
    <div class="form__text">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c  
        <a href="" class="link_underlined">политикой конфиденциальности</a> 
    </div>
    <input type="submit" class="btn btn_green btn_centered form__btn" value="оформить онлайн" @click="sendForm">
  </div>
</template>

<script>
import {eventBus} from '../main'
import { required, email, checked } from "vuelidate/lib/validators"
import DateInput from './DateInput'
import TextInput from './TextInput'
import DoubleInput from './DoubleInput'
// import ThankYouBig from './ThankYouBig.vue'

export default {
  name: 'BigForm',
  components: {
    DateInput,
    TextInput,
    DoubleInput,
  },
  data() {
    return {
      url: window.location.href + '/intApi.php',
        life: false,
        property: false,
        contractNumber: '',
        contractDate: {
          day: '',
          month: '',
          year: '',
          divider: '.'
        },
        noNumber: false,
        name: '',
        gender: '',
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
        birthPlace: '',
        registerAddress: '',
        isSameAddress: false,
        objectAddress: '',
        email: '',
        phone: '',
      correctData: null
    }
  },
  validations() {
    return {
      life: this.property ? {} : { required: v => v },
      property: this.life ? {} : { required: v => v },
      gender: {required: required}
    }
  },
  mounted() {
    eventBus.$on('validationError', (error) => {
      this.correctData = !error
    })
  },
  methods: {
    validate() {
      this.$v.$touch()
      if (this.$v.$error) {
        eventBus.$emit("validationError", this.$v.$error)
      }
    },
    reset() {
      this.$v.$reset()
      eventBus.$emit("validationError", this.$v.$error)
    },
    sameAddress() {
      if (this.isSameAddress){
        this.objectAddress = this.registerAddress
      }
    },
    sendForm() {
      this.validate()

      if (!this.correctData){
        return
      }
      const data = 
       {
      type: "big",
      content: {
      "name": "Сделка от " + this.fields.name,
      "price": this.calculateSum(),
      "pipeline_id":4171915,
      "_embedded":{
        "contacts":[
            {
              "name": this.fields.name,
              // "first_name": firstForm.fields.name,
              // "last_name": firstForm.fields.surName,
              "custom_fields_values":[
                  {
                    "field_id":829811,
                    "values":[
                        {
                          "value": firstForm.phone,
                        }
                    ]
                  },
                  {
                    "field_id":829813,
                    "values":[
                        {
                          "value": firstForm.email,
                        }
                    ]
                  }
              ]
            }
        ],
      },
      "custom_fields_values":[
      {
          "field_id": 1056649,
          "field_name": "Дата договора",
          "values": [
              {
                  "value": this.$preparedData(this.fields.contractDate)
              }
          ]
      },
      {
          "field_id": 1056647,
          "field_name": "Сумма кредита",
          "values": [
              {
                  "value": this.fields.contractNumber
              }
          ]
      },
      {
          "field_id": 1056655,
          "field_name": "Адрес объекта",
          "values": [
              {
                  "value": this.fields.objectAddress
              }
          ]
      },
      {
          "field_id": 912891,
          "field_name": "Дата рождения",
          "values": [
              {
                  "value": this.$preparedData(this.fields.birthPlace)
              }
          ]
      },
      {
          "field_id": 844217,
          "field_name": "Адрес регистрации",
          "values": [
              {
                  "value": this.fields.registerAddress
              }
          ]
      },
      {
          "field_id": 844207,
          "field_name": "Паспорт серия",
          "values": [
              {
                  "value": this.fields.passportNumber.serie
              }
          ]
      },
      {
          "field_id": 844209,
          "field_name": "Паспорт номер",
          "values": [
              {
                  "value": this.fields.passportNumber.number
              }
          ]
      },
      {
          "field_id": 844215,
          "field_name": "Код подразделения",
          "values": [
              {
                  "value": this.fields.passportCode
              }
          ]
      },
      {
          "field_id": 844211,
          "field_name": "Дата паспорта",
          "values": [
              {
                  "value": this.$preparedData(this.fields.passportDate)
              }
          ]
      },
      {
          "field_id": 844213,
          "field_name": "Паспорт кем выдан",
          "values": [
              {
                  "value": this.fields.passportEmitter
              }
          ]
      },
      {
          "field_id": 844205,
          "field_name": "Пол",
          "values": [
              {
                  "value": this.fields.gender
              }
          ]
      },
      {
          "field_id": 844203,
          "field_name": "Место рождения",
          "values": [
              {
                  "value": this.fields.birthPlace
              }
          ]
      },
      // {
      //     "field_id": 844323,
      //     "field_name": "Имя",
      //     "values": [
      //         {
      //             "value": this.forms[i].fields.name
      //         }
      //     ]
      // },
      // {
      //     "field_id": 844325,
      //     "field_name": "Отчество",
      //     "values": [
      //         {
      //             "value": this.forms[i].fields.patrName
      //         }
      //     ]
      // }
      ],
    }
  }

      eventBus.$emit('sendForm', JSON.stringify(data))
    }
  }
}
</script>

<style lang="scss">
.big-form{
    width: 100%;
    background: #fff;
    padding: 17px 25px;
    border: 1px solid $color-light-grey;
  &__wrapper{
    width: 100%;
    background: #fff;
    padding: 15px;
    max-width: 945px;
    margin: 0 auto;
    border: 1px solid $color-light-grey;
  }
}
  .app{
    background-color: #fff;
  }
  .form-heading{
    font-size: 19px;
  }
  button{
    margin-top: 30px;
  }
  .buttons-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .datepickers-block{
    display: flex;
    align-items: center;
  }
  .datepicker{
    margin: 0 15px 0 5px;
  }
  .stage-markers-wrapper{
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    padding: 20px 27px;
    height: 117px;
    margin-bottom: 19px;
  }
  .stage-markers{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1px;
    margin: 35px 89px;
    border: 1px solid;
    border-color: transparent;
  }
  .stage-markers-item{
    position: relative;
    background-color: #fff;
    z-index: 4;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    border: 1px solid #C4C4C4;
  }
  .stage-markers-item_active{
    display: flex;
  }
  .stage-markers-marker{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #C4C4C4;
    width: 42px;
    height: 42px;
    color: #C4C4C4;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
  }
  .stage-markers-marker_active{
    background-color: #069E2D;
    color: #fff;
  }
  .stage-markers-description{
    position: absolute;
    bottom: -20px;
    font-size: 13px;
    line-height: 16px;
    font-weight: 600;
    white-space: nowrap;
    color: #C4C4C4;
  }
  .stage-markers-description_active{
    color: #4B4955;
  }
  @media screen and (min-width: 575px) {
    .stage-markers{
      justify-content: space-between;
      border-color: #C4C4C4;
    }
    .stage-markers-item{
      display: flex;
    }
  }
  .resume-text{
    margin-top: 50px;
  }
  .sale-offer{
    border: 4px solid #FF6600;
    padding: 0 10px;
    border-radius: 10px;
    margin: 30px auto;
    font-size: 20px;
  }
  .data-list-item_name{
    font-weight: 700;
  }
  .btn {
  text-align: center;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  border-radius: 11px;
  text-transform: uppercase;
  display: block;
  width: 256px;
  padding: 17px 0 13px;
  color: #fff;
  cursor: pointer; }
  .btn_outlined {
    color: #4B4955;
    border: 3px solid #4B4955; }

    .btn_outlined:hover {
      background-color: #4B4955;
      color: #fff; }
  .btn_orange {
    background-color: #FF6600;
    border: 3px solid #FF6600; }
    .btn_orange:hover {
      background-color: #fff;
      color: #FF6600; }
  .btn_green {
    background-color: #069E2D;
    border: 3px solid #069E2D; }
    .btn_green:hover {
      background-color: #fff;
      color: #069E2D; }
  .btn_centered {
    margin: 0 auto;}

</style>
