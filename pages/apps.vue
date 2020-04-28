<template>
  <div class="main background">
    <nav-bar-logged/> <!-- nav-bar-logged -->
    <div>
      <br/>
      <h1 class="title">Apps</h1>

      <div class="columns is-multiline is-mobile">
        <app-card v-for="app in apps" v-bind:key="app.id" :app="app"/>
      </div>

    </div> <!-- general -->
  </div> <!-- main background -->
</template> <!-- template -->

<script>
  const Cookie = process.client ? require('js-cookie') : undefined

  import NavBarLogged from '~/components/NavBarLogged.vue'
  import AppCard from '~/components/AppCard.vue'

  export default {
    // middleware: 'notAuthenticated',
    data:() => ({
      apps: [],
      appsTotal: 0
        /*apps: [
          {
            "id": 1,
            "app_name": "App Test 1",
            "description": "App 1 for test the system",
            "version": "1.0",
            "technology": "django",
            "tool": "-",
            "stack": true,
            "multiple_db": false,
            "db_engine": "postgres",
            "db_name": "name for the database",
            "db_dump": null,
            "git_repo": "https://github.com/NamoxLabs/NamoxPanel.git",
            "dockerized": true,
            "admin_panel": false,
            "product": "rest",
            "output": "json",
            "request_log": true,
            "active": true,
            "created_at": "2019-10-26T21:48:58.932106-05:00",
            "last_update": "2019-10-26T21:48:58.932151-05:00",
            "created_by": 1
          },
          {
            "id": 2,
            "app_name": "App Test 2",
            "description": "App 1 for test the system",
            "version": "1.0",
            "technology": "django",
            "tool": "-",
            "stack": true,
            "multiple_db": false,
            "db_engine": "postgres",
            "db_name": "name for the database",
            "db_dump": null,
            "git_repo": "https://github.com/NamoxLabs/NamoxPanel.git",
            "dockerized": true,
            "admin_panel": false,
            "product": "rest",
            "output": "json",
            "request_log": true,
            "active": true,
            "created_at": "2019-10-26T22:13:42.437395-05:00",
            "last_update": "2019-10-26T22:13:42.437432-05:00",
            "created_by": 1
          },
          {
            "id": 3,
            "app_name": "App Test 3",
            "description": "App 1 for test the system",
            "version": "1.0",
            "technology": "django",
            "tool": "-",
            "stack": true,
            "multiple_db": false,
            "db_engine": "postgres",
            "db_name": "name for the database",
            "db_dump": null,
            "git_repo": "https://github.com/NamoxLabs/NamoxPanel.git",
            "dockerized": true,
            "admin_panel": false,
            "product": "rest",
            "output": "json",
            "request_log": true,
            "active": true,
            "created_at": "2019-10-26T22:13:47.824565-05:00",
            "last_update": "2019-10-26T22:13:47.824588-05:00",
            "created_by": 1
          },
          {
            "id": 4,
            "app_name": "App Test 4",
            "description": "App 1 for test the system",
            "version": "1.0",
            "technology": "django",
            "tool": "-",
            "stack": true,
            "multiple_db": false,
            "db_engine": "postgres",
            "db_name": "name for the database",
            "db_dump": null,
            "git_repo": "https://github.com/NamoxLabs/NamoxPanel.git",
            "dockerized": true,
            "admin_panel": false,
            "product": "rest",
            "output": "json",
            "request_log": true,
            "active": true,
            "created_at": "2019-10-26T22:13:49.960165-05:00",
            "last_update": "2019-10-26T22:13:49.960205-05:00",
            "created_by": 1
          },
          {
            "id": 5,
            "app_name": "App Test 5",
            "description": "App 1 for test the system",
            "version": "1.0",
            "technology": "django",
            "tool": "-",
            "stack": true,
            "multiple_db": false,
            "db_engine": "postgres",
            "db_name": "name for the database",
            "db_dump": null,
            "git_repo": "https://github.com/NamoxLabs/NamoxPanel.git",
            "dockerized": true,
            "admin_panel": false,
            "product": "rest",
            "output": "json",
            "request_log": true,
            "active": true,
            "created_at": "2019-10-26T22:13:54.048832-05:00",
            "last_update": "2019-10-26T22:13:54.048944-05:00",
            "created_by": 1
          },
          {
              "id": 6,
              "app_name": "App Test 6",
              "description": "App 6 for test the system",
              "version": "1.0",
              "technology": "-",
              "tool": "-",
              "stack": true,
              "multiple_db": false,
              "db_engine": "postgres",
              "db_name": "name for the database",
              "db_dump": "file in the system",
              "git_repo": "https://github.com//.git",
              "dockerized": true,
              "admin_panel": false,
              "product": "",
              "output": "",
              "request_log": true,
              "active": true,
              "created_at": "2019-10-27T19:25:04.013682-06:00",
              "last_update": "2019-10-27T19:25:04.013734-06:00",
              "created_by": 4
          },
          {
              "id": 7,
              "app_name": "App Test 7",
              "description": "App 7 for test the system",
              "version": "1.0",
              "technology": "python",
              "tool": "django_auth",
              "stack": true,
              "multiple_db": false,
              "db_engine": "postgres",
              "db_name": "name for the database",
              "db_dump": null,
              "git_repo": "https://github.com//.git",
              "dockerized": true,
              "admin_panel": false,
              "product": "rest",
              "output": "json",
              "request_log": true,
              "active": true,
              "created_at": "2019-10-27T20:32:59.041564-06:00",
              "last_update": "2019-10-27T20:32:59.041622-06:00",
              "created_by": 4
          },
          {
              "id": 8,
              "app_name": "Proyecto prueba 1",
              "description": "avesraervw",
              "version": "0.0.1",
              "technology": "python",
              "tool": "django_auth",
              "stack": false,
              "multiple_db": false,
              "db_engine": "-",
              "db_name": "db_1",
              "db_dump": "",
              "git_repo": "",
              "dockerized": true,
              "admin_panel": true,
              "product": "rest",
              "output": "json",
              "request_log": false,
              "active": true,
              "created_at": "2019-10-27T23:48:47.083667-06:00",
              "last_update": "2019-10-27T23:48:47.083706-06:00",
              "created_by": 4
          },
          {
              "id": 9,
              "app_name": "Proyecto prueba 2",
              "description": "sdfgdfg",
              "version": "0.0.1",
              "technology": "python",
              "tool": "django_auth",
              "stack": false,
              "multiple_db": false,
              "db_engine": "-",
              "db_name": "db_1",
              "db_dump": "",
              "git_repo": "",
              "dockerized": true,
              "admin_panel": true,
              "product": "rest",
              "output": "json",
              "request_log": true,
              "active": true,
              "created_at": "2019-10-27T23:50:37.408580-06:00",
              "last_update": "2019-10-27T23:50:37.408629-06:00",
              "created_by": 4
          },
          {
              "id": 10,
              "app_name": "Proyecto prueba 3",
              "description": "tbertres",
              "version": "0.0.1",
              "technology": "python",
              "tool": "django_auth",
              "stack": false,
              "multiple_db": false,
              "db_engine": "-",
              "db_name": "db_1",
              "db_dump": "",
              "git_repo": "",
              "dockerized": true,
              "admin_panel": true,
              "product": "rest",
              "output": "json",
              "request_log": true,
              "active": true,
              "created_at": "2019-10-27T23:53:52.968462-06:00",
              "last_update": "2019-10-27T23:53:52.968498-06:00",
              "created_by": 4
          },
          {
              "id": 11,
              "app_name": "Proyecto prueba 4",
              "description": "fdsgsdfg",
              "version": "0.0.1",
              "technology": "python",
              "tool": "django_auth",
              "stack": false,
              "multiple_db": false,
              "db_engine": "-",
              "db_name": "db_1",
              "db_dump": "",
              "git_repo": "",
              "dockerized": true,
              "admin_panel": true,
              "product": "rest",
              "output": "json",
              "request_log": true,
              "active": true,
              "created_at": "2019-10-27T23:56:07.876420-06:00",
              "last_update": "2019-10-27T23:56:07.876476-06:00",
              "created_by": 4
          }
      ]*/
    }),
    components: {
      NavBarLogged,
      AppCard
    },
    methods: {
      async getApps() {
        this.loading = true
        try {
          if (typeof Cookie.get('auth') !== 'undefined'
            || Cookie.get('auth') !== ''
            || Cookie.get('auth') !== null) {
              let cookie_auth = Cookie.get('auth')
              let respose_apps = await this.$store.dispatch('getApps', { authToken: cookie_auth })

              if (respose_apps !== null && typeof respose_apps !== 'undefined') {
                this.loading = false
                this.apps = respose_apps.data.apps
                this.appsTotal = respose_apps.data.apps.lenght()
              }
          }
        } catch (e) {
          this.formError = e.message
        }

        this.loading = false
        return this.apps
      },
    },
    created() {
      this.getApps()
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 38px;
    font-weight: bold;
  }
</style>