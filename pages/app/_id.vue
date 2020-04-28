<template>
  <div class="main background">
    <nav-bar-logged/> <!-- nav-bar-logged -->
    <div>
      <br/>
      <h1 class="title">App</h1>

    </div> <!-- general -->
  </div> <!-- main background -->
</template> <!-- template -->

<style scoped>
  .title {
    font-size: 18px;
    font-weight: bold;
  }
</style>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined

  import NavBarLogged from '~/components/NavBarLogged.vue'

  export default {
    validate ({ params }) {
      console.log("params")
      console.log("||||||||")
      console.log(params)
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    data:() => ({
      loading: false,
      app_id: null,
      app: []
    }),
    components: {
      NavBarLogged
    },
    methods: {
      async getApp() {
        this.loading = true
        try {
          if (typeof Cookie.get('auth') !== 'undefined'
            || Cookie.get('auth') !== ''
            || Cookie.get('auth') !== null) {
              let cookie_auth = Cookie.get('auth')
              let respose_app = await this.$store.dispatch('getApp', { authToken: cookie_auth, appID: this.$route.params.id })
              console.log("respose_app")
              console.log("---------")
              console.log(respose_app)
              if (respose_app !== null && typeof respose_app !== 'undefined') {
                this.loading = false
                this.app = respose_app.data.app
              }
          }
        } catch (e) {
          this.formError = e.message
        }
        this.loading = false
        return this.app
      }
    },
    mounted() {
      this.getApp()
    }
  }
</script>