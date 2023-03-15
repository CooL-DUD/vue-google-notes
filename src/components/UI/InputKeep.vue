<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input-keep">
</template>

<script>
export default {
  name: "InputKeep",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input-keep {
  background: none;
  border: none;
  outline: none;
  color: rgba(0,0,0,0.702);
  width: 100%;
  font-size: 16px;
}
</style>