<template>
  <div
    class="checkbox-group-input input-block"
    :class="{ 'input-block_error': $v.value.$error }"
  >
    <label :for="inputName">{{ labelText }}</label>
    <label class="label_thin" v-for="(label, value) in variants" :key="value">
    <input 
      :value="value"
      type="checkbox" 
    />
    {{label}}
    </label>
    <div class="input-error" v-if="$v.value.$dirty && $v.value.$invalid">
      {{ labelText }} - обязательное поле
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators"
export default {
  name: 'CheckboxGroup',
  props: {
    inputName: {
      type: String,
      default: "",
    },
    labelText: {
      type: String,
      default: "",
    },
    value: {
      type: null,
      default: null,
    },
    variants: {
      type: Object,
      default: null
    }
  },
  validations: {
    value: {required: required},
  },
}
</script>

<style>

</style>