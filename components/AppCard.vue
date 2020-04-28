<template>
  <div class="column">
    <div class="card card-app">
      <header class="card-header">
        <p class="card-header-item">
          <a class="navbar-item" :href="'/newmodule/' + app.id"> Create Module</a>
        </p>
        <p class="card-header-item">
          <a class="navbar-item" :href="'/newentity/' + app.id"> Create Entity</a>
        </p>
      </header>
      <div class="card-content">
        <h1 class="app-title">
          <a :href="'/app/' + app.id"> {{ app.app_name }}</a>
        </h1>
        <h3>
          Technology: {{ app.technology }}
        </h3>
        <p>
          Tool: {{ app.tool }}
        </p>
        <p>
          DB Engine: {{ app.db_engine }}
        </p>
        <p>
          Modules: <a :href="app.git_repo">1</a>
        </p>
        <p>
          Entities: <a :href="app.git_repo">20</a>
        </p>
        <p>
          <a :href="app.git_repo">Git repo</a>
        </p>
      </div>

      <footer class="card-footer">
        <p class="card-footer-item">
          <nuxt-link class="navbar-item" to="/clone/">
            Download
          </nuxt-link>
        </p>
        <p class="card-footer-item">
          <nuxt-link class="navbar-item" to="/edit/">
            Edit
          </nuxt-link>
        </p>
        <p class="card-footer-item">
          <nuxt-link class="navbar-item" to="/deploy/">
            Deploy
          </nuxt-link>
        </p>
      </footer>
    </div> <!-- card -->
  </div> <!-- column -->
</template>

<style scoped>
  .app-title {
    font-size: 26px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }
  .card-app {
    width: 290px;
    /* height: 360px; */
    border-radius: 4px;
  }
  .card-header {
    align-items: center;
    justify-content: center;
  }
</style>

<script>
export default {
  props: [
    'app'
  ],
  data() {
    return {
    }
  }
}
</script>