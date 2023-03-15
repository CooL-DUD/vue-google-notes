<template>
  <button type="button" class="button-keep">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonKeep"
}
</script>

<style scoped lang="scss">
.button-keep{
  background: none;
  border: none;
  width: 48px;
  height: 48px;
  outline: none;
  border-radius: 50px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgba(60,64,67,.08);
  }
}
</style>