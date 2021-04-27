import Vue from 'vue'
import App from './App.vue'
import myPlugin from './plugin'

import Vuelidate from 'vuelidate'
import 'swiper/css/swiper.css'

Vue.use(Vuelidate)
Vue.use(myPlugin)

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
