<template>
   <button
    class="wink-button"
    @click="handleClick">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
  </template>
  
  <script>
  export default {
    name: 'wink-button',
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  }
  </script>
<style scoped>
    .wink-button{
      
    }
</style>