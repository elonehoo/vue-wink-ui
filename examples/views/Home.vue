<template>
  <div class="home">
    <wink-button>test</wink-button>
    <br>
    <wink-link>test</wink-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods:{
    buttonClick(){
      console.log("test")
    }
  }
}
</script>
