<template>
  <div class="background">
    <nav-bar/>
    <div>
      <br/>
      <h1 class="title-login">Welcome back</h1>
      <br/>
      <form @submit="onSubmit">
        <div class="columns is-multiline is-mobile is-centered">

          <div class="column is-full col-login-center">
            <div class="field input-element input-login">
              <div class="control">
                <input
                  id="input-email"
                  v-model="form.email"
                  class="input"
                  type="email"
                  placeholder="Email"
                  required>
              </div>
            </div>
          </div>

          <div class="column is-full col-login-center">
            <div class="field input-element input-login">
              <div class="control">
                <input
                  id="input-password"
                  v-model="form.password"
                  type="password"
                  class="input"
                  placeholder="Password"
                  required>
              </div>
            </div>
          </div>

          <div class="column is-full col-login-center">
            <div class="field input-element input-login">
              <div class="control">
                <div class="control">
                  <button type="submit" class="button is-link input-login">Login</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined

  import NavBar from '~/components/NavBar.vue'

  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    components: {
      NavBar
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        try {
          let data = {
            email: this.form.email,
            password: this.form.password
          }
          try {
            let respose_register = await this.$store.dispatch('login', data)
            if (typeof respose_register !== 'undefined' && typeof respose_register.data !== 'undefined') {
              if (respose_register.data.email !== '') {
                // let userDataObj = JSON.parse(JSON.stringify(this.$store.state.authUser))
                Cookie.set('email', respose_register.data.email)
                Cookie.set('auth', respose_register.data.user_token)
                Cookie.set('username', respose_register.data.username)

                this.$router.push('/dashboard')

                this.form.email = ''
                this.form.password = ''
                this.formError = null
              } else {
                console.log("respose_register");
                console.log("------------");
                console.log(respose_register);
              }
            } else {
              console.log("User login error");
            }
          } catch (e) {
            this.formError = e.message
          }
        } catch (e) {
          this.formError = e.message
        }
      }
    }
  }
</script>

<style scoped>
  .col-login-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .col-login-left {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .col-login-right {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .input-login {
    width: 250px;
  }

  .title-login {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 48px;
    font-weight: bold;
  }
</style>