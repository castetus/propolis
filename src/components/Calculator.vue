<template lang="pug">
  .calculator 
    .calculator__inner-block
      h3.calculator__title Рассчитаем и оформим полис для клиентов любого банка. Просто оставьте заявку!
      a.btn.btn_orange.btn_centered(@click="popupOpen('ContactForm')") обратный звонок
    .calculator__inner-block
      select-input(label-text="Выберите банк" inputName="bank" :options="data.banks" v-model="bank")
      text-input(label-text="Остаток по кредиту" inputName="debt" v-model="debt")
      h3 Право собственности получено?
      .input-block
        .input
          input(type="radio" name="isProperty" id="is-property-no" v-model="isProperty" value=false)
          label(for="is-property-no") Нет, дом еще строится
        .input
          input(type="radio" name="isProperty" id="is-property-yes" v-model="isProperty" value=true)
          label(for="is-property-yes") Есть право собственности
        .input-error(v-if="($v.life.$dirty && $v.life.$invalid) || ($v.property.$dirty && $v.property.$invalid)") отметьте хотя бы одну опцию
      h3 Что будет застраховано?
      .input-block
        .input
          input(type="checkbox" name="life" id="life" v-model="life" @change="$v.life.$touch()")
          label(for="life") Жизнь
        .input(:class="{disabled: !this.isProperty}")
          input(type="checkbox" name="property" id="property" v-model="property" @change="$v.property.$touch()" )
          label(for="property") Имущество
        .input-error(v-if="($v.life.$dirty && $v.life.$invalid) || ($v.property.$dirty && $v.property.$invalid)") отметьте хотя бы одну опцию
      h3 Пол заемщика
      .input-block
        .input
          input(type="radio" name="gender" id="genderMale" v-model="gender" value="male" @change="$v.gender.$touch()")
          label(for="genderMale") Муж
        .input
          input(type="radio" name="gender" id="genderFemale" v-model="gender" value="female" @change="$v.gender.$touch()")
          label(for="genderFemale") Жен
      date-input(label-text="Дата рождения" inputName="birthDate" v-model="birthDate")
      .form__text Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c 
        a.link_underlined политикой конфиденциальности
      input.btn.btn_centered.btn_outlined_green.form__btn(type="submit" value="рассчитать стоимость" @click="calculate") 
      .calculator__result(ref="result")
      .calculator__result-block(v-if="resultText")
        text-input(label-text="Введите адрес почты" inputName="email" v-model="email")
        a.btn.btn_orange.btn_centered(@click="sendResult") Сохранить результат
</template>

<script>
import {required, email} from "vuelidate/lib/validators"
import {eventBus} from '../main'
import {store} from '../store'
import DateInput from './DateInput'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import RadioInput from './RadioInput'
import CheckboxGroup from './CheckboxGroup'
export default {
  name: 'Calculator',
  components: {
    DateInput,
    TextInput,
    SelectInput,
    RadioInput,
    CheckboxGroup
  },
  data() {
    return {
      bank: null,
      debt: '',
      isProperty: false,
      birthDate: {
        day: '',
        month: '',
        year: '',
        divider: '.'
      },
      property: false,
      life: false,
      gender: '',
      email: '',
      correctData: null,
      resultText: '',
      data: store,
      sberEstateRate: 0.00225,
    }
  },
  validations() {
    return {
      life: this.property ? {} : { required: v => v },
      property: this.life ? {} : { required: v => v },
      gender: {required: required},
      email: {email, required}
    }
  },
  methods: {
    popupOpen(elem){
      eventBus.$emit('popupOpen', elem)
    },
    validate() {
      this.$v.$touch()
      if (this.$v.$error) {
        eventBus.$emit("calculatorValidationError", this.$v.$error)
      }
    },
    reset() {
      this.$v.$reset()
      eventBus.$emit("calculatorValidationError", this.$v.$error)
    },
    calculateAge(){
      const birthDate = this.$preparedData(this.birthDate).split('.').reverse()
      return Math.floor((new Date().getTime() - new Date(birthDate)) / (24 * 3600 * 365.25 * 1000)); 
    },
    calculateSberLifeCost(){
      const sberRates = JSON.parse(this.data.sberRates)
      const ageRate = sberRates[this.calculateAge()]
      if (typeof ageRate !== 'undefined'){
        return Math.round(ageRate[this.gender].sber * this.debt)
      }
      return 0
    },
    calculateSberPropertyCost(){
      return Math.round(this.sberEstateRate * this.debt)
    },
    calculateLifeCost(){
      const age = this.calculateAge()
      const rates = []
      this.data.insCompanies.forEach((company) => {
        let companyRate = company.banks[this.bank].life
        if (typeof companyRate !== 'undefined'){
          let ageRate = this.data.rates[companyRate][age]
          let singleRate = 0
          if (typeof ageRate !== 'undefined'){
            singleRate = ageRate[this.gender]
          }
          rates.push({company: company.label, rate: Math.round(singleRate * this.debt)})
        }
      })
      console.log(rates)
      return rates
    },
    calculatePropertyCost(){
      const rates = []
      this.data.insCompanies.forEach(company => {
        let singleRate = company.banks[this.bank].estate
        if (typeof singleRate !== 'undefined'){
          rates.push({company: company.label, rate: Math.round(singleRate * this.debt)})
        }
      })
      console.log(rates)
      return rates
    },
    calculate() {
      this.validate()
      // if (!this.correctData){
      //   return
      // }
      const results = {
        lifeSum: 0,
        lifeSumCompare: 0,
        propertySum: 0,
        propertySumCompare: 0,
        stringLife: '',
        stringProperty: '',
      }

      let lifeString = ''
      let propertyString = ''

      if (this.life){
        lifeString += '<p><span class="text_green"><b>Страхование жизни:</b></span></p>'
        this.calculateLifeCost().forEach((rate) => {
          if (rate.rate === 0){
            rate.rate = 'Страхование невозможно'
          }
          const result = `<p>${rate.company}: <b>${rate.rate}</b> руб.</p>`
          lifeString += result
        })
        let sberString = this.calculateSberLifeCost() === 0 ? 'Сбер: Страхование невозможно' : `<p>Сбер: <b>${this.calculateSberLifeCost()}</b> руб.`
        lifeString += sberString
      }
      if (this.property){
        propertyString += '<p><span class="text_green"><b>Страхование имущества:</b></span></p>'
        this.calculatePropertyCost().forEach((rate) => {
          const result = `<p>${rate.company}: <b>${rate.rate}</b> руб.</p>`
          propertyString += result
        })
        propertyString += `<p>Сбер: <b>${this.calculateSberPropertyCost()}</b> руб.`
      }

      this.resultText = lifeString + propertyString
      this.$refs.result.innerHTML = this.resultText
    },
    sendResult(){
      if (!this.email){
        return
      }
      const calcData = {
        email: this.email,
        data: this.result
      }
      eventBus.$emit('calcResult', calcData)
    }
  }
}
</script>

<style lang="scss">
  .calculator{
    background-color: $color-pink;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    max-width: 945px;
    &__inner-block{
      background-color: #fff;
      border: 1px solid $color-light-grey;
      padding: 17px 25px;
      &:first-child{
        margin-bottom: 10px;
      }
    }
    &__title{
      margin: 0 auto 17px;
      text-align: center;
      color: $color-grey;
    }
  }
</style>