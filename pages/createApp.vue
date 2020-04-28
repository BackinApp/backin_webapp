<template>
  <div class="background">
    <nav-bar-logged/>
    <div>
      <br/>
      <h1 class="main-title">Create a new app</h1>
      <br/>
      <form @submit="onSubmit">

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="control">
                <input 
                  id="input-name"
                  v-model="form.name"
                  class="input"
                  type="text"
                  required
                  placeholder="Name">
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="control">
                <textarea 
                  id="input-description"
                  v-model="form.description"
                  class="textarea"
                  type="textarea"
                  placeholder="Description (optional)"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="control">
                <input 
                  id="input-version"
                  v-model="form.version"
                  class="input"
                  type="text"
                  placeholder="Version (optional)">
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="control">
                <div class="select">
                  <select v-model="techOpt" v-on:change="techChanged">
                    <option v-for="option in techOptions" :value="option.id" :selected="option.id===techOpt">{{option.label}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-register">
              <div class="control">
                <div class="select">
                  <select v-model="toolsOpt">
                    <option v-for="option in toolsOptions" :value="option.id" :selected="option.id===toolsOpt">{{option.label}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="control">
                <div class="select">
                  <select v-model="dbOpt">
                    <option v-for="option in dbOptions" :value="option.id" :selected="option.id===dbOpt">{{option.label}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="control">
                <input 
                  id="input-db-name"
                  v-model="form.db_name"
                  class="input"
                  type="text"
                  required
                  placeholder="Database name">
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="control">
                <div class="file has-name">
                  <label class="file-label">
                    <input 
                      id="input-db-dump"
                      class="file-input"
                      v-on:change="handleFileUpload()"
                      type="file"
                      name="db_dump"
                      ref="db_dump"
                      placeholder="Database dump (optional)">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">
                        Choose a file…
                      </span>
                    </span>
                    <span class="file-name">
                      {{ fileName }}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="control">
                <input 
                  id="input-git-repo"
                  v-model="form.git_repo"
                  class="input"
                  type="text"
                  placeholder="Git repo url (optional)">
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input 
                      id="input-dockerized"
                      v-model="form.dockerized"
                      value="dockerized"
                      type="checkbox"> Dockerized
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input 
                      id="input-admin_panel"
                      v-model="form.admin_panel"
                      value="admin_panel"
                      type="checkbox"> Admin Panel
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input 
                      id="input-request_log"
                      v-model="form.request_log"
                      value="request_log"
                      type="checkbox"> Logger
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-left">
            <div class="field input-element input-register">
              <div class="control">
                <div class="select">
                  <select v-model="outputOpt">
                    <option v-for="option in outputOptions" :value="option.id" :selected="option.id===outputOpt">{{option.label}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-left">
            <div class="field input-element input-register">
              <div class="control">
                <div class="select">
                  <select v-model="productOpt">
                    <option v-for="option in productOptions" :value="option.id" :selected="option.id===productOpt">{{option.label}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        
        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-half col-register-center">
            <div class="field input-element input-element">
              <div class="field is-grouped">
                <div class="control">
                  <button type="submit" class="button is-link">Create App</button>
                </div>
                <div class="control">
                  <button class="button is-danger is-light">Cancel</button>
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

  import NavBarLogged from '~/components/NavBarLogged.vue'

  export default {
    data() {
      return {
        techOpt: '-',
        /* techOptions: [
          {id: '-', label: 'Technology'}
        ], */
        techOptions: [
          {id: '-', label: 'Technology'},
          {id: 'python', label: 'Python'},
          {id: 'js', label: 'Js'},
          {id: 'golang', label: 'Go'},
          {id: 'ruby', label: 'Ruby'},
          {id: 'php', label: 'PHP'},
          {id: 'net-c', label: '.Net C#'},
          {id: 'net-core-c', label: '.Net Core C#'},
          {id: 'elixir', label: 'Elixir'}
        ],
        toolsOpt: '-',
        /* toolsOptions: [
          {id: '-', label: 'Tool'}
        ], */
        toolsOptions: [
          {id: '-', label: 'Tool'},
          {id: 'prisma', label: 'Prisma'},
          {id: 'flask', label: 'Flask - Python'},
          {id: 'django', label: 'Django - Python'},
          {id: 'drf', label: 'Django Rest Framework - Python'},
          {id: 'django_auth', label: 'Django Auth Server - Python'},
          {id: 'django_oauth', label: 'Django OAuth Server - Python'},
          {id: 'django_oauth2', label: 'Django OAuth2 Server - Python'},
          {id: 'django_drf', label: 'Django With Django Rest Framework - Python'},
          {id: 'django_graphql', label: 'Django GraphQL Server - Python'},
          {id: 'microservice_python', label: 'Microservice - Python'},
          {id: 'apistar', label: 'Apistar - Python'},
          {id: 'plain_php', label: 'Plain PHP - PHP'},
          {id: 'plain_php_7', label: 'Plain PHP 7 - PHP'},
          {id: 'mamp_php', label: 'MAMP - PHP'},
          {id: 'lamp_php', label: 'LAMP - PHP'},
          {id: 'slim_php', label: 'Slim PHP - PHP'},
          {id: 'ci_php', label: 'CodeIgniter - PHP'},
          {id: 'symfony', label: 'Symfony - PHP'},
          {id: 'yii', label: 'Yii - PHP'},
          {id: 'yii_2', label: 'Yii 2 - PHP'},
          {id: 'wp', label: 'WordPress - PHP'},
          {id: 'buffalo_go', label: 'Buffalo - Go'},
          {id: 'mean_js', label: 'MEAN - JavaScript'},
          {id: 'apollo_server_js', label: 'Apollo Server - JavaScript'},
          {id: 'parse_js', label: 'Parse - JavaScript'}
        ],
        dbOpt: '-',
        dbOptions: [
          {id: '-', label: 'Database'}
        ],
        /* dbOptions: [
          {id: '-', label: 'Database'},
          {id: 'postgres', label: 'PostgreSQL'},
          {id: 'mysql', label: 'MySql'},
          {id: 'mariadb', label: 'MariaDB'},
          {id: 'sqlserver', label: 'SQL Server'},
          {id: 'oracle', label: 'Oracle'},
          {id: 'db2', label: 'DB2'},
          {id: 'sqlite', label: 'SQLite'},
          {id: 'mongodb', label: 'MongoDB'},
          {id: 'cassandra', label: 'Cassandra'},
        ], */
        outputOpt: '-',
        outputOptions: [
          {id: '-', label: 'Output Data Format'}
        ],
        /* outputOptions: [
          {id: '-', label: 'Output Data Format'},
          {id: 'json', label: 'JSON'},
          {id: 'graphql', label: 'GraphQL'},
          {id: 'xml', label: 'XML'},
          {id: 'yalm', label: 'YALM'}
        ], */
        productOpt: '-',
        productOptions: [
          {id: '-', label: 'Product'}
        ],
        /* productOptions: [
          {id: '-', label: 'Product'},
          {id: 'rest', label: 'RESTful API'},
          {id: 'grapqhl', label: 'GraphQL API'},
          {id: 'soap', label: 'SOAP'},
          {id: 'websocket', label: 'WebSocket'},
          {id: 'e-commerce', label: 'E-Commerce'},
          {id: 'e-commerce-api', label: 'E-commerce API'},
          {id: 'blog', label: 'Blog'},
          {id: 'blog-api', label: 'Blog API'}
        ], */
        file: '',
        fileName: '',
        form: {
          name: '',
          description: '',
          version: '',
          tech: '',
          tool: '',
          stack: '',
          multiple_db: '',
          db_engine: '',
          db_name: '',
          db_dump: '',
          git_repo: '',
          dockerized: [],
          admin_panel: [],
          product: 'rest',
          output: 'json',
          request_log: []
        }
      }
    },
    components: {
      NavBarLogged
    },
    methods: {
      handleFileUpload() {
        this.file = this.$refs.db_dump.files[0]
        this.fileName = this.file.name
      },
      async onSubmit(evt) {
        evt.preventDefault()
        try {
          let dockerized, admin_panel, request_log = false
          if (typeof this.form.dockerized !== 'undefined'
            && this.form.dockerized[0] === 'dockerized') {
            dockerized = true
          } else {
            dockerized = false
          }
          if (typeof this.form.admin_panel !== 'undefined'
            && this.form.admin_panel[0] === 'admin_panel') {
            admin_panel = true
          } else {
            admin_panel = false
          }
          if (typeof this.form.request_log !== 'undefined'
            && this.form.request_log[0] === 'request_log') {
            request_log = true
          } else {
            request_log = false
          }
          let data = {
            "app_name": this.form.name,
            "description": this.form.description,
            "version": this.form.version,
            "technology": this.techOpt,
            "tool": this.toolsOpt,
            "stack": false,
            "multiple_db": false,
            "db_engine": this.dbOpt,
            "db_name": this.form.db_name,
            "db_dump": this.file,
            "git_repo": this.form.git_repo,
            "dockerized": dockerized,
            "admin_panel": admin_panel,
            "product": 'rest',
            "output": 'json',
            "request_log": request_log
          }
          try {
            let respose_register = await this.$store.dispatch('createApp', {authToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6Imdpb3Zhbm5peWF0emVAZ21haWwuY29tIiwiZXhwIjoxNTcyMjcxNjc0LCJlbWFpbCI6Imdpb3Zhbm5peWF0emVAZ21haWwuY29tIiwib3JpZ19pYXQiOjE1NzIyNDE2NzR9.By9LRCHboFLzSutHYZyxcE5d1SRRp22ewxKaFYj76WQ", app_data: data})
          } catch (e) {
            this.formError = e.message
          }
        } catch (e) {
          this.formError = e.message
        }
      },
      async techChanged(evt) {
        evt.preventDefault()
        try {
          console.log("techChanged")
          console.log("-------")
          console.log(this.techOpt)
          let data = {
            techSelected: this.techOpt,
          }
          let respose_register = await this.$store.dispatch('getTools', data)

          if (typeof respose_register !== 'undefined') {
            if (respose_register.data.user_created.status === 201) {
              this.$router.push('/')

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
      }
    }
  }
</script>

<style scoped>
  .main-title {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 32px;
    font-weight: bold;
  }

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

  .input-element {
    width: 250px;
  }
</style>