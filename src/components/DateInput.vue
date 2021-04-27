<template>
  <div class="input-block date-input" :class="{'input-block_error': $v.day.$error }">
      <label :for="inputName">{{labelText}}</label>
      <div class="select-block">
        <select class="select-day" 
          :name="inputName" 
          v-model="day" 
          @focus="reset">
          <option value="">День</option>
          <option 
            v-for="day in 31"
            :key="day"
            :value="prepareDate(day)">
            {{day}}
          </option>
        </select>
        <select class="select-month" 
          :name="inputName" 
          v-model="month" 
          @focus="reset">
          <option value="">Месяц</option>
          <option 
            v-for="(value, key) in months"
            :key="key"
            :value="prepareDate(key)">
            {{value}}
          </option>
        </select>
        <select class="select-year" 
          :name="inputName" 
          v-model="year" 
          @focus="reset">
          <option value="">Год</option>
          <option 
            v-for="year in years"
            :key="year"
            :value="year">
            {{year}}
          </option>
        </select>
      </div>
      <div class="input-error" v-if="$v.day.$error || $v.month.$error || $v.year.$error">Выберите дату</div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import {eventBus} from '../main'
export default {
  name: 'DateInput',
  props: ['formId', 'inputName','labelText','value'],
  data() {
    return {
      months: {
        1: 'январь',
        2: 'февраль',
        3: 'март',
        4: 'апрель',
        5: 'май',
        6: 'июнь',
        7: 'июль',
        8: 'август',
        9: 'сентябрь',
        10: 'октябрь',
        11: 'ноябрь',
        12: 'декабрь'
      },
    }
  },
  validations: {
    day: {required},
    month: {required},
    year: {required},
  },
  computed: {
    years(){
      const currentYear = new Date().getFullYear()
      const years = []
      for (let i = currentYear; i > (currentYear - 100); i--){
        years.push(i)
      }
      return years
    },
    localValue: {
			get: function() {
				return this.value
			},
			set: function(value) {
				this.$emit('input', value);
			}
		},
		day: {
			get: function() {
				return this.localValue.day;
			},
			set: function(value) {
				this.propertySetter('day', value);
			}
		},
    month: {
			get: function() {
				return this.localValue.month;
			},
			set: function(value) {
				this.propertySetter('month', value);
			}
		},
    year: {
			get: function() {
				return this.localValue.year;
			},
			set: function(value) {
				this.propertySetter('year', value);
			}
		},
  },
  mounted() {
    eventBus.$on("proceed", this.validate)
  },
  beforeDestroy(){
    eventBus.$off("proceed", this.validate)
  },
  methods: {
    propertySetter: function(key, value) {
			this.localValue = Object.assign({}, this.localValue, {[key]:value});
		},
    validate(){
      this.$v.$touch()
      if (this.$v.$error) {
        eventBus.$emit("validationError", this.$v.$error)
      }
    },
    reset() {
      this.$v.$reset()
      eventBus.$emit('validationError', this.$v.$error)
    },
    prepareDate(str) {
      let result = str.toString().length < 2 ? '0' + str.toString() : str
      return result
    }
  }
}
</script>

<style>
  .select-block{
    display: flex;
    justify-content: space-between;
  }
    .select-day{
    flex-basis: 20%;
  }
  .select-month{
    flex-basis: 30%;
  }
  .select-year{
    flex-basis: 30%;
  }
</style>