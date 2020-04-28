<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://backin.io">
        <img src="https://bulma.io/images/.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/dashboard">
          Home
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/apps">
          Apps
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/servers">
          Servers
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/apis">
          API's
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/connections">
          Connections
        </nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Docs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-primary" to="/createapp">
              <strong>Create App</strong>
            </nuxt-link>
            <nuxt-link class="button is-warning" to="/newserver">
              Conect Server
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  
</style>