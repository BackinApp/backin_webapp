<template>
  <div class="background">
    <nav-bar/>
    <div>
      <br/>
      <h1 class="title-register">Create new account</h1>
      <br/>
      <form @submit="onSubmit">

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-left">
            <div class="field input-element input-register">
              <div class="control">
                <input 
                  id="input-name"
                  v-model="form.names"
                  class="input"
                  type="text"
                  required
                  placeholder="Name(s)">
              </div>
            </div>
          </div>

          <div class="column is-half col-register-right">
            <div class="field input-element input-register">
              <div class="control">
                <input
                  id="input-surname"
                  v-model="form.surnames"
                  class="input"
                  type="text"
                  placeholder="Last name"
                  required>
              </div>
            </div>
          </div>

          <div class="column is-half col-register-left">
            <div class="field input-element input-register">
              <div class="control">
                <input
                  id="input-username"
                  v-model="form.username"
                  class="input"
                  type="text"
                  placeholder="Username">
              </div>
            </div>
          </div>

          <div class="column is-half col-register-right">
            <div class="field input-element input-register">
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

          <div class="column is-half col-register-left">
            <div class="field input-element input-register">
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

          <div class="column is-half col-register-right">
            <div class="field input-element input-register">
              <div class="control">
                <input
                  id="input-repassword"
                  v-model="form.repassword"
                  type="password"
                  class="input"
                  placeholder="Re-type password"
                  required>
              </div>
            </div>
          </div>

          <div class="column is-half col-register-left">
            <div class="field input-element input-register">
              <div class="control">
                <input
                  id="input-website"
                  v-model="form.website"
                  type="text"
                  class="input"
                  placeholder="Website (optional)">
              </div>
            </div>
          </div>

          <div class="column is-half col-register-right">
            <div class="field input-element input-register">
              <div class="control">
                <input
                  id="input-company"
                  v-model="form.company"
                  type="text"
                  class="input"
                  placeholder="Company (optional)">
              </div>
            </div>
          </div>

          <div class="column is-one-quarter">
            <span>&nbsp;</span>
          </div>
          <div class="column is-half col-register-center">
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input 
                    id="input-terms"
                    v-model="form.terms"
                    value="terms-approved"
                    type="checkbox">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
          </div>
          <div class="column is-one-quarter">
            <span>&nbsp;</span>
          </div>

          <div class="column is-one-quarter">
            <span>&nbsp;</span>
          </div>
          <div class="column is-half col-register-center">
            <div class="login-text">Already have an account?<nuxt-link size="sm" class="" to="/login"> Log In</nuxt-link></div>
          </div>
          <div class="column is-one-quarter">
            <span>&nbsp;</span>
          </div>

          <div class="column is-one-quarter">
            <span>&nbsp;</span>
          </div>
          <div class="column is-half col-register-center">
            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-link">Sign Up</button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
          <div class="column is-one-quarter">
            <span>&nbsp;</span>
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
          names: '',
          surnames: '',
          username: '',
          email: '',
          password: '',
          repassword: '',
          website: '',
          company: '',
          terms: []
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
          if (typeof this.form.terms !== 'undefined' && this.form.terms[0] === 'terms-approved') {
            if (this.form.password === this.form.repassword) {
              let data = {
                names: this.form.names,
                surnames: this.form.surnames,
                username: this.form.username,
                email: this.form.email,
                password: this.form.password,
                phone: '',
                // phone: this.form.cellphone,
                website: this.form.website,
                company: this.form.company
              }
              try {
                let respose_register = await this.$store.dispatch('register', {data: data})

                if (typeof respose_register !== 'undefined') {
                  if (respose_register.data.user_created.status === 201) {
                    this.$router.push('/registered')

                    this.form.email = ''
                    this.form.password = ''
                    this.formError = null
                  } else {
                    console.log("respose_register");
                    console.log("------------");
                    console.log(respose_register);
                  }
                } else {
                  console.log("User creation error");
                }
              } catch (e) {
                this.formError = e.message
              }
            } else {
              // show error msg
            }
          }
        } catch (e) {
          this.formError = e.message
        }
      }
    }
  }
</script>

<style scoped>
  .col-register-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .col-register-left {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .col-register-right {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .input-register {
    width: 250px;
  }

  .title-register {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 48px;
    font-weight: bold;
  }
</style>