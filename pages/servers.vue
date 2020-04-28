<template>
  <div class="main background">
    <nav-bar-logged/> <!-- nav-bar-logged -->
    <div>
      <br/>
      <h1 class="title">Servers</h1>

    </div> <!-- general -->
  </div> <!-- main background -->
</template> <!-- template -->

<style scoped>
  .title {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 38px;
    font-weight: bold;
  }
</style>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined

  import NavBarLogged from '~/components/NavBarLogged.vue'

  export default {
    data() {
      return {
        
      }
    },
    components: {
      NavBarLogged
    }
  }
</script>