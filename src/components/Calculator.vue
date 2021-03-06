<template lang="pug">
  .calculator 
    .calculator__inner-block
      h3.calculator__title Рассчитаем и оформим полис для клиентов любого банка. Просто оставьте заявку!
      a.btn.btn_orange.btn_centered(@click="popupOpen('ContactForm')") обратный звонок
    .calculator__inner-block(v-if="loadedData")
      .input-block
        label(for="bank") Выберите банк
        select(name="bank" v-model="bank")
          option(v-for="bank in data.banks" :value="bank.value") {{bank.label}}
        .input-error(v-if="$v.bank.$dirty && $v.bank.$invalid") выберите опцию
      .input-block
        label(for="debt") Сумма кредита
        input(type="number" name="debt" v-model="debt")
        .input-error(v-if="$v.debt.$dirty && $v.debt.$invalid") заполните это поле
      h3 Право собственности получено?
      .input-block
        .input
          input(type="radio" name="isProperty" id="is-property-no" v-model="isProperty" :value="false")
          label(for="is-property-no") Нет, дом еще строится
        .input
          input(type="radio" name="isProperty" id="is-property-yes" v-model="isProperty" :value="true")
          label(for="is-property-yes") Есть право собственности
        .input-error(v-if="($v.life.$dirty && $v.life.$invalid) || ($v.property.$dirty && $v.property.$invalid)") отметьте хотя бы одну опцию
      h3 Что будет застраховано?
      .input-block
        .input
          input(type="checkbox" name="life" id="life" v-model="life" @change="$v.life.$touch()")
          label(for="life") Жизнь
        .input
          input(type="checkbox" :disabled="!isProperty" name="property" id="property" v-model="property" @change="$v.property.$touch()" )
          label(for="property") Имущество
        .input( v-if="showTitle")
          input(type="checkbox" name="title" id="title" v-model="title" @change="$v.title.$touch()")
          label(for="title") Титул
        .input-error(v-if="($v.life.$dirty && $v.life.$invalid) || ($v.property.$dirty && $v.property.$invalid)") отметьте хотя бы одну опцию
      h3(v-if="life") Заемщик
      .input-block(v-if="life")
        label Пол заемщика
        .input
          input(type="radio" name="gender" id="genderMale" v-model="gender" value="male" @change="$v.gender.$touch()")
          label(for="genderMale") Муж
        .input
          input(type="radio" name="gender" id="genderFemale" v-model="gender" value="female" @change="$v.gender.$touch()")
          label(for="genderFemale") Жен
        .input-error(v-if="$v.gender.$dirty && $v.gender.$invalid") выберите пол
      date-input(v-if="life" label-text="Дата рождения" inputName="birthDate" v-model="birthDate")
      .form__text Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c 
        a.link_underlined(@click="openPolicy") политикой конфиденциальности
      a.btn.btn_centered.btn_outlined_green.form__btn(@click.prevent="calculate") рассчитать стоимость
      .calculator__result(ref="result")
      .calculator__result-block(v-if="resultText")
        .input-block
          label(for="email") Ваша почта
          input(v-model="email" name="email")
        .input-error(v-if="$v.email.$dirty && $v.email.$invalid") Введите адрес почты
        a.btn.btn_orange.btn_centered(@click="sendResult") Сохранить результат
</template>

<script>
import {required, email, integer} from "vuelidate/lib/validators"
import {eventBus} from '../main'
import {store} from '../store'
import firebase from 'firebase/app'
import DateInput from './DateInput'
require('firebase/database')
export default {
  name: 'Calculator',
  components: {
    DateInput,
  },
  data() {
    return {
      bank: null,
      debt: null,
      isProperty: false,
      birthDate: {
        day: '',
        month: '',
        year: '',
        divider: '.'
      },
      property: false,
      life: false,
      title: false,
      gender: '',
      email: '',
      correctData: true,
      resultText: '',
      data: null,
      sberEstateRate: 0.00225,
      checkEmail: false,
      loadedData: false,
      store: store
    }
  },
  validations() {
    return {
      bank: {required},
      debt: {required, integer},
      life: this.property || this.title ? {} : { required: v => v },
      property: this.life || this.title ? {} : { required: v => v },
      title: this.life || this.property ? {} : { required: v => v },
      gender: this.life ? {required: required} : {},
      email: this.checkEmail ? {email, required} : {}
    }
  },
  created(){
    this.getData();
  },
  computed: {
    showTitle(){
      if (this.bank && this.bank != 19){
        return true
      }
      this.title = false
      return false
    }
  },
  methods: {
    async getData(){
      try {
        const request = await (await firebase.database().ref().once('value')).val()
        const data = await request;
        const store = {
          banks: data.banks,
          insCompanies: JSON.parse(data.companies),
          rates: JSON.parse(data.rates)
        }
        this.data = store;
        this.loadedData = true;
      } catch (error) {
        console.log(error)
      }
    },
    popupOpen(elem){
      eventBus.$emit('popupOpen', elem)
    },
    openPolicy(){
      eventBus.$emit('openPolicy')
    },
    validate() {
      this.$v.$touch()
      this.correctData = !this.$v.$error
    },
    reset() {
      this.$v.$reset()
    },
    calculateAge(){
      const birthDate = this.$preparedData(this.birthDate).split('.').reverse()
      return Math.floor((new Date().getTime() - new Date(birthDate)) / (24 * 3600 * 365.25 * 1000)); 
    },
    calculateSberLifeCost(){
      const sberRates = JSON.parse(this.store.jsonRates)
      const ageRate = sberRates[this.calculateAge()]
      if (typeof ageRate !== 'undefined'){
        return Math.round(ageRate[this.gender].sber * this.debt)
      }
      return 0
    },
    calculateSberPropertyCost(){
      return Math.round(this.sberEstateRate * this.debt)
    },
    calculateLifeCost(sum){
      const age = this.calculateAge()
      const rates = []
      let debt = 0
      
      this.data.insCompanies.forEach((company) => {
        if (!company.banks[this.bank]){
          return
        }
        let companyRate = company.banks[this.bank].life
        if (typeof companyRate !== 'undefined'){
          let ageRate = this.data.rates[companyRate][age]
          let singleRate = 0
          if (typeof ageRate !== 'undefined'){
            singleRate = ageRate[this.gender]
          }
          rates.push({company: company.label, rate: Math.round(singleRate * sum)})
        }
      })
      if (this.bank === 19){
        rates.push({company: 'Сбер', rate: this.calculateSberLifeCost()})
      }
      return rates
    },
    calculatePropertyCost(sum){
      const rates = []
      this.data.insCompanies.forEach(company => {
        
        if (company.banks[this.bank]){
          let singleRate = company.banks[this.bank].estate
          if (typeof singleRate !== 'undefined'){
            rates.push({company: company.label, rate: Math.round(singleRate * sum)})
          }
        }
      })
      if (this.bank === 19){
        rates.push({company: 'Сбер', rate: this.calculateSberPropertyCost()})
      }
    },
    calculateTitleCost(sum){
      const rates = []
      this.data.insCompanies.forEach(company => {
        if (company.banks[this.bank]){
          let singleRate = company.banks[this.bank].title
          if (typeof singleRate !== 'undefined'){
            rates.push({company: company.label, rate: Math.round(singleRate * sum)})
          }
        }
      })
      return rates
    },
    calculate() {
      // this.bank === 19 ? this.debt : this.debt = this.debt * 1.1
      this.checkEmail = false
      this.validate()
      if (!this.correctData){
        return
      }

      let lifeString = ''
      let propertyString = ''
      let titleString = ''
      let summary = new Map()
      let wholeRisksString = '<p><span class="text_green"><b>Итого по всем рискам:</b></span></p>'

      let insuranseSum = this.debt
      if (this.bank != '19'){
        insuranseSum = Math.floor(insuranseSum * 1.1)
      }

      if (this.life){
        lifeString += '<p><span class="text_green"><b>Страхование жизни:</b></span></p>'
        this.calculateLifeCost(insuranseSum).forEach((rate) => {
          let currency = ' руб.'
          if (rate.rate === 0){
            rate.rate = 'Страхование невозможно'
            currency = ''
          }
          const result = `<p>${rate.company}: <b>${rate.rate}</b> ${currency}</p>`
          if (!isNaN(rate.rate)){
            if (!summary.has(rate.company)){
              summary.set(rate.company, rate.rate)
            } else {
              summary.set(rate.company, (summary.get(rate.company) + rate.rate))
            }
          } else {
            summary.set(rate.company, 'unable')
          }
          lifeString += result
        })
      }
      if (this.property){
        propertyString += '<p><span class="text_green"><b>Страхование имущества:</b></span></p>'
        this.calculatePropertyCost(insuranseSum).forEach((rate) => {
          const result = `<p>${rate.company}: <b>${rate.rate}</b> руб.</p>`
          propertyString += result
            if (!summary.has(rate.company)){
              summary.set(rate.company, rate.rate)
            } else if (summary.get(rate.company) === 'unable'){
              summary.set(rate.company, 'unable')
            } else {
              summary.set(rate.company, (summary.get(rate.company) + rate.rate))
            }
        })
      }
      if (this.title){
        titleString += '<p><span class="text_green"><b>Страхование титула:</b></span></p>'
        this.calculateTitleCost(insuranseSum).forEach((rate) => {
          const result = `<p>${rate.company}: <b>${rate.rate}</b> руб.</p>`
          titleString += result
            if (!summary.has(rate.company)){
              summary.set(rate.company, rate.rate)
            } else if (summary.get(rate.company) === 'unable'){
              summary.set(rate.company, 'unable')
            } else {
              summary.set(rate.company, (summary.get(rate.company) + rate.rate))
            }
        })
      }
      const insuranseSumString = `<p>Страховая сумма по требованию банка: <b>${insuranseSum}</b> руб.</p>`

      if (summary.size !== 0){
        for (let [key, value] of summary.entries()){
          if (value !== 'unable'){
            wholeRisksString += `<p>${key}: <b>${value}</b> руб.</p>`
          }
        }
      }

      if (wholeRisksString === '<p><span class="text_green"><b>Итого по всем рискам:</b></span></p>'){
        wholeRisksString = ''
      }
      
      this.resultText = insuranseSumString + lifeString + propertyString + titleString + wholeRisksString
      this.$refs.result.innerHTML = this.resultText
    },
    sendResult(){
      this.checkEmail = true
      this.$v.email.$touch()
      if (this.$v.email.$invalid){
        return
      }
      const calcData = {
        email: this.email,
        data: this.resultText
      }
      eventBus.$emit('sendCalc', calcData)
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
    &__result-block{
      position: relative;
    }
  }
</style>