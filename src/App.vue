<template>
  <div id="app">
    <app-header></app-header>
    <app-menu></app-menu>
    <main-slider></main-slider>
    <banner></banner>
    <about></about>
    <opps></opps>
    <partners></partners>
    <div class="block_white" id="calculator">
      <div class="container">
        <h2 class="heading heading_green">сравните и купите онлайн</h2>
        <h2 class="heading heading_green">Калькулятор</h2>
        <calculator></calculator>
      </div>
    </div>
    <div class="block_pink" id="big-form">
      <div class="container">
        <h2 class="heading heading_green">оформление страхового полиса</h2>
        <button class="btn btn_centered btn_green" v-if="!isForm" @click="isForm = !isForm">заполнить форму</button>
        <div v-if="isForm" class="big-form__wrapper">
          <big-form></big-form>
        </div>
      </div>
    </div>
    
    <payment></payment>
    <team></team>
    <!-- <testimonials></testimonials> -->
    <faq></faq>
    <div class="block_white">
      <div class="container">
        <h2 class="heading heading_green">получить консультацию</h2>
        <contact-form></contact-form>
        <p class="text_center">По вопросам связанным с покупкой недвижимости можете обратиться к <a class="link link_underlined link_green" href="https://pro-consalt.com/uslugi/" target="blank">нашим партнёрам</a></p>
      </div>
    </div>
    <widget />
    <app-footer></app-footer>
    <div class="popup" :class="{popup_visible : isPopupVisible}">
      <button class="btn btn_close" @click="popupClose"></button>
      <component :is="component" :images="images"></component>
    </div>
    <div class="mask" :class="{mask_visible: isMaskVisible}" @click="popupClose"></div>
  </div>
</template>

<script>
import {eventBus} from './main.js'
import AppHeader from './components/Header.vue'
import AppMenu from './components/Menu.vue'
import MainSlider from './components/MainSlider.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Opps from './components/Opps.vue'
import Calculator from './components/Calculator.vue'
import BigForm from './components/BigForm.vue'
import Partners from './components/Partners.vue'
import Payment from './components/Payment.vue'
import Team from './components/Team.vue'
import Testimonials from './components/Testimonials.vue'
import Faq from './components/Faq.vue'
import ContactForm from './components/ContactForm.vue'
import AppFooter from './components/Footer.vue'
import Thankyou from './components/Thankyou'
import ThankyouBig from './components/ThankyouBig'
import ThankyouCalc from './components/ThankyouCalc'
import Policy from './components/Policy'
import Licence from './components/Licence'
import Widget from './components/Widget'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMenu,
    MainSlider,
    Banner,
    About,
    Opps,
    Calculator,
    BigForm,
    Partners,
    Payment,
    Team,
    Testimonials,
    Faq,
    ContactForm,
    AppFooter,
    Thankyou,
    ThankyouBig,
    ThankyouCalc,
    Policy,
    Licence,
    Widget
  },
  data() {
    return {
      isPopupVisible: false,
      isMaskVisible: false,
      component: null,
      images: [],
      isForm: false,
      emailUrl: window.location.origin + '/mailer.php',
      apiUrl: window.location.origin + '/intApi.php',
      widget: null,
    }
  },
  mounted(){
    // const widgetScript = document.createElement('script')
    // widgetScript.setAttribute('src', 'https://agents.polis.online/widget_v2.min.js')
    // document.body.appendChild(widgetScript)
    eventBus.$on('popupOpen', (elem) => {
      this.popupOpen(elem)
    })
    eventBus.$on('showLicence', (number) => {
      this.images = [
        this.getImgPath(number, 1),
        this.getImgPath(number, 2),
      ]
      eventBus.$emit('licencePath', this.images)
      this.popupOpen('Licence')
    })
    eventBus.$on('showAllLicences', () => {
      for (let i = 1; i < 8; i++){
        this.images.push(this.getImgPath(i, 1))
        this.images.push(this.getImgPath(i, 2))
      }
      eventBus.$emit('licencePath', this.images)
      this.popupOpen('Licence')
    })
    eventBus.$on('sendCalc', (data) => {
      this.sendCalc(data)
    })
    eventBus.$on('sendForm', (data) => {
      this.sendForm(data)
    })
    eventBus.$on('openPolicy', () => {
      this.popupOpen('Policy')
    })
  },
  methods: {
    getImgPath(index, i){
      return require('./assets/img/licence_' + index + '_' + i + '.jpg')
    },
    popupOpen(elem){
      this.isPopupVisible = true
      this.isMaskVisible = true
      this.component = elem
    },
    popupClose(){
      this.images = []
      this.isPopupVisible = false
      this.isMaskVisible = false
      eventBus.$emit('destroyLicence')
    },
    async sendCalc(data){
      try {
        const request = await fetch(this.emailUrl, {
          method: 'POST',
          body: JSON.stringify(data)
        })
        const result = await request.text()
        if (request.ok){
          this.popupOpen('ThankyouCalc')
        }
      } catch (error) {
        console.log(error)
      }
    },
    async sendForm(data){
      let elem = 'Thankyou'
      if (data.type === 'big'){
        elem = 'ThankyouBig'
      }
      try {
        const request = await fetch(this.apiUrl, {
          method: 'POST',
          body: JSON.stringify(data.content)
        })
        const result = await request.text()
        if (request.ok){
          this.popupOpen(elem)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
      width: 50%;
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
    max-width: 486px;
  }
  .input-block input[type="radio"], .input-block input[type="checkbox"]{
    width: auto;
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
  .input-block label[class="label_thin"]{
    font-weight: 400;
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
  .popup{
  display: none;
  position: fixed;
  width: 590px;
  max-width: 90%;
  left: 5%;
  top: 10%;
  max-height: 80vh;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 500;
  }
  .popup_visible{
    display: block;
  }
  .popup_wide{
    width: 90vw;
    height: 90vh;
    left: 5%!important;
    top: 5%;
  }
  @media screen and (min-width: 650px) {
    .popup{
      left: calc(50vw - 295px);
    }
  }
  .mask_visible{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 490;
  }
  .link_underlined{
    cursor: pointer;
  }
  .link_green{
    color: #069E2D;
  }
  .thankyou{
    padding-top: 30px;
  }
  .text_center{
    text-align: center;
    margin-top: 30px;
  }

</style>
