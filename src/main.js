import Vue from 'vue'
import App from './App.vue'
import myPlugin from './plugin'

import Vuelidate from 'vuelidate'
import 'swiper/css/swiper.css'
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnAsRHrlnjU1m3bUNWR76rGMSOXMZtjoM",
  authDomain: "insurance-calculator-ba1c5.firebaseapp.com",
  projectId: "insurance-calculator-ba1c5",
  storageBucket: "insurance-calculator-ba1c5.appspot.com",
  messagingSenderId: "328345359679",
  appId: "1:328345359679:web:e1891e1fff25b8a9ab2f8a",
  measurementId: "G-YMQMCKE0C4",
  databaseURL: "https://insurance-calculator-ba1c5-default-rtdb.europe-west1.firebasedatabase.app/"
};
firebase.initializeApp(firebaseConfig)

Vue.use(Vuelidate)
Vue.use(myPlugin)

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')


