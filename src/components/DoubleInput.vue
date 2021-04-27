<template>
  <div class="double-input input-block">
    <label :for="inputName">{{labelText}}</label>
    <div class="input-group">
      <input 
        class="double-input_small" 
        type="text" :name="inputName" 
        v-on:focus="reset"
        v-model="serie">
      <input 
        class="double-input_big" 
        type="text" :name="inputName" 
        v-on:focus="reset"
        v-model="number">
    </div>
    <div class="input-error" v-if="($v.serie.$dirty && $v.serie.$invalid) || ($v.number.$dirty && $v.number.$invalid)">{{labelText}} - обязательное поле</div>
    <div class="input-error" v-if="(!$v.serie.minLength && $v.serie.$invalid) || (!$v.serie.maxLength && $v.serie.$invalid)">Серия должна содержать 4 цифры</div>
    <div class="input-error" v-if="(!$v.number.minLength && $v.number.$invalid) || (!$v.number.maxLength && $v.number.$invalid)">Номер должен содержать 6 цифр</div>
  </div>
</template>

<script>
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
import { eventBus } from '../main'

export default {
  name: 'DoubleInput',
  props: ['formId', 'inputName','labelText','value'],
  data() {
    return {

    }
  },
  mounted() {
    eventBus.$on("proceed", this.validate)
  },
  beforeDestroy(){
    eventBus.$off("proceed", this.validate)
  },
  computed: {
		localValue: {
			get: function() {
				return this.value
			},
			set: function(value) {
				this.$emit('input', value);
			}
		},
		serie: {
			get: function() {
				return this.localValue.serie;
			},
			set: function(value) {
				this.propertySetter('serie', value);
			}
		},
		number: {
			get: function() {
				return this.localValue.number;
			},
			set: function(value) {
				this.propertySetter('number', value);
			}
		}
	},
  validations: {
    serie: {
      required,
      minLength: minLength(4), 
      maxLength: maxLength(4), 
      numeric
    },
    number: {
      required,
      minLength: minLength(6), 
      maxLength: maxLength(6), 
      numeric
    }
  },
  methods: {
    propertySetter: function(key, value) {
			this.localValue = Object.assign({}, this.localValue, {[key]:value});
		},
    validate() {
      this.$v.$touch()
      if (this.$v.$error) {
        eventBus.$emit("validationError", this.$v.$error)
      }
    },
    reset() {
      this.$v.$reset()
      eventBus.$emit('validationError', this.$v.$error)
    }
  }
}
</script>

<style>
  .input-group{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .double-input_small{
    flex-basis: 25%;
  }
  .double-input_big{
    flex-basis: 50%;
  }
</style>