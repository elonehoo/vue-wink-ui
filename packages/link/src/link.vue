<template>
    <a class="wink-link">
      <span v-if="$slots.default"><slot></slot></span>
    </a>
</template>

<script>
    export default {
      name: 'wink-link',
      data () {
        return {
        }
      },
      methods: {
        
      }
    }
</script>
<style scoped>
    .wink-link{
        color: #61BFC1;
        margin: 0;
        padding: 0;
        text-decoration: none;
        vertical-align: baseline;
    }
    a:hover {
      text-decoration: underline;
    }
    a:visited {
      color: #466B6C;
    }
</style>