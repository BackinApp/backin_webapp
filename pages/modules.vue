<template>
  <div class="main background">
    <nav-bar-logged/> <!-- nav-bar-logged -->
    <div>
      <br/>
      <h1 class="title">Modules</h1>

    </div> <!-- general -->
  </div> <!-- main background -->
</template> <!-- template -->

<style scoped>
  .app-title {
    font-size: 18px;
    font-weight: bold;    
  }
</style>

<script>
export default {
  props: [
    'app-id'
  ],
  data() {
    return {
    }
  }
}
</script>