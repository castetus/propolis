<template>
  <div
    class="text-input input-block"
    :class="{ 'input-block_error': $v.value.$error }"
  >
    <label :for="inputName">{{ labelText }}</label>
    <input
      type="text"
      :value="value"
      :name="inputName"
      v-on:input="$emit('input', $event.target.value)"
      v-on:focus="reset"
      :disabled="disabled"
    />
    <div class="input-error" v-if="$v.value.$dirty && $v.value.$invalid">
      {{ labelText }} - обязательное поле
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators"
import { eventBus } from "../main"

export default {
  name: "TextInput",
  props: {
    inputName: {
      type: String,
      default: "",
    },
    labelText: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: null,
      default: null,
    },
  },
  data() {
    return {
      edited: false,
    }
  },
  mounted() {
    eventBus.$on("proceed", this.validate)
  },
  beforeDestroy(){
    eventBus.$off("proceed", this.validate)
  },
  validations() {
    switch (this.inputName){
      case 'passportCode':
      return {
        value: { required: required },
      } 
      case 'email':
        return {
          value: {required, email}
        }
      default:
        return {
          value: { required: required },
        }
    }
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
  },
}
</script>

<style></style>
