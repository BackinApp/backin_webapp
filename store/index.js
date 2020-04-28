import axios from 'axios'

export const state = () => ({
  authUser: null,
  username: null,
  email: null
})

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  },
  SET_USERNAME (state, username) {
    state.username = username
  },
  SET_EMAIL (state, email) {
    state.email = email
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (typeof req.session !== 'undefined') {
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    }
  },
  // async register ({ commit }, { email, password, first_name, last_name, country, phone, address }) {
  async register ({ commit }, { data }) {
    let data_send = JSON.stringify({
      username: data.username,
      name: data.names,
      lastname: data.surnames,
      email: data.email,
      password: data.password,
      repassword: data.password,
      invitation_code: "",
      rol: "user"
    })
    try {
      const { data } = await axios.post('/api/register', data_send, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      return data
    } catch (error) {
      if (error.response && error.response.status === 404 || error.response && error.response.status === 400 || error.response && error.response.status === 500) {
        throw new Error('Error in user creation')
      }
      throw error
    }
  },
  async activateAccount ({ commit }, { email, code }) {
    let data_send = JSON.stringify({
      email: email,
      code: code,
    })
    try {
      const { data } = await axios.post('/api/activate_account', data_send, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      return data
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async login ({ commit }, { email, password }) {
    let data_send = JSON.stringify({
      email: email,
      password: password,
    })
    try {
      const { data } = await axios.post('/api/login', data_send, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      commit('SET_USER', data.user_token)
      commit('SET_USERNAME', data.username)
      commit('SET_EMAIL', data.email)
      return data
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async userInfo ({ commit }, { email }) {
    let data_send = JSON.stringify({
      email: email,
    })
    try {
      // Send session token
      const { data } = await axios.post('/api/client/profile', data_send, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "bearer " + this.state.authUser
        }
      })
      commit('SET_USER_PROFILE', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async getTech ({ commit }, { techSelected }) {
    let data_send = JSON.stringify({
      techSelected: techSelected,
    })
    try {
      // Send session token
      const { data } = await axios.post('/api/tools/', data_send, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "bearer " + this.state.authUser
        }
      })
      console.log("data")
      console.log("---------")
      console.log(data)
      // commit('SET_USER_PROFILE', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async getTools ({ commit }, { techSelected }) {
    let data_send = JSON.stringify({
      techSelected: techSelected,
    })
    try {
      // Send session token
      const { data } = await axios.post('/api/tools/', data_send, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "bearer " + this.state.authUser
        }
      })
      console.log("data")
      console.log("---------")
      console.log(data)
      // commit('SET_USER_PROFILE', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async getDBEngines ({ commit }, { techSelected }) {
    let data_send = JSON.stringify({
      techSelected: techSelected,
    })
    try {
      // Send session token
      const { data } = await axios.post('/api/tools/', data_send, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "bearer " + this.state.authUser
        }
      })
      console.log("data")
      console.log("---------")
      console.log(data)
      // commit('SET_USER_PROFILE', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async createApp ({ commit }, { authToken, app_data }) {
    try {
      var data_send = {}
      if (typeof authToken !== 'undefined') {
        data_send = JSON.stringify({
          authToken: authToken,
          app_data: app_data
        })
      }
      console.log("·········")
      console.log("data_send")
      console.log(data_send)
      // Send session token
      const { data } = await axios.post('/api/create-app', data_send, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("data final")
      console.log("---------")
      console.log(data)
      // commit('SET_USER_PROFILE', data)
      return data
    } catch (error) {
      console.log("error")
      console.log("---------")
      console.log(error)
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async getApps ({ commit }, { authToken }) {
    try {
      var data_send = {}
      if (typeof authToken !== 'undefined') {
        data_send = JSON.stringify({
          authToken: authToken
        })
      }
      console.log("·········")
      console.log("data_send")
      console.log(data_send)
      // Send session token
      const { data } = await axios.post('/api/get-apps', data_send, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("data final")
      console.log("---------")
      console.log(data)
      // commit('SET_USER_PROFILE', data)
      return data
    } catch (error) {
      console.log("error")
      console.log("---------")
      console.log(error)
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async getApp ({ commit }, { authToken, appID }) {
    try {
      var data_send = {}
      if (typeof authToken !== 'undefined') {
        data_send = JSON.stringify({
          authToken: authToken,
          appID: appID
        })
      }
      // Send session token
      const { data } = await axios.post('/api/app', data_send, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("data final")
      console.log("---------")
      console.log(data)
      // commit('SET_USER_PROFILE', data)
      return data
    } catch (error) {
      console.log("error")
      console.log("---------")
      console.log(error)
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  }
}