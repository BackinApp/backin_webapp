const consola = require('consola')
const axios = require('axios')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.prod = process.env.NODE_ENV === 'production'
config.dev = process.env.NODE_ENV === 'dev'

var methods = {}
var url_calls = ""

if (config.prod) {
  url_calls = config.apiCalls.productionServerUrl
} else {
  url_calls = config.apiCalls.serverUrl
}

consola.log("url_calls")
consola.log("|||||||||")
consola.log(url_calls)

methods.registerUser = async(data) => {
  var response_service = {}
  try {
    await axios.post(url_calls+'/auth/signup/', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function (response) {
      if (typeof response !== 'undefined'
        && response !== null
        && response !== {}
        && response.status === 201
        && response.statusText === 'Created') {
          if (typeof response.data !== 'undefined'
            && response.data !== null){
            response_service.status = 201
            response_service.statusText = "OK"
          }
      }
    })
    .catch(function (error) {
      if (response.status === 404) {
        response.status = 404
        response = "Error, not found"
      }

      if (typeof error !== 'undefined' 
        && error !== null 
        && response.status !== 404
        && error.email !== '') {
          consola.info('Error, user already exists in the platform')
          response_service.status = 400
          response_service.statusText = "ERROR"
      }

    });
  } catch (e) {
    this.formError = e.message
  }
  return response_service
}

methods.authUser = async(data) => {
  try {
    // await axios.post('http://0.0.0.0:8000/api-token-auth/', data, {
    await axios.post(url_calls+'/auth/login/', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function (response) {
      if (typeof response !== 'undefined'
        && response !== null
        && response.status === 200
        && response.statusText === 'OK') {
          if (typeof response.data !== 'undefined'
            && response.data !== null) {
            data = response.data
            data.status = 200
            data.statusText = 'OK'
          }
      }
    })
    .catch(function (error) {
      if (typeof error !== 'undefined' 
        && error !== null 
        && error.email !== '') {
          consola.info('error')
          consola.info(error)
          data = {"Error": "Error authenticating user in the platform"}
          consola.info('Error authenticating user in the platform')
      }
    });
  } catch (e) {
    this.formError = e.message
  }
  return data
}

methods.getUserProfile = async(data) => {
  var profile = {}
  try {
    // await axios.post('http://0.0.0.0:8000/client/profile/', data, {
    await axios.post(url_calls+'/client/profile/', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function (response) {
      if (typeof response !== 'undefined'
        && response !== null
        && response.status === 200
        && response.statusText === 'OK') {
          if (typeof response.data !== 'undefined'
            && response.data !== null){
            // profile = response.data.
            profile = {}
          }
      }
    })
    .catch(function (error) {
      if (typeof error !== 'undefined' 
        && error !== null 
        && error.email !== '') {
          consola.info('Error, user already exists in the platform')
      }
    });
  } catch (e) {
    this.formError = e.message
  }
  return profile
}

methods.getTools = async(data) => {
  var platform_tools = {}
  try {
    // await axios.post('http://0.0.0.0:8000/client/profile/', data, {
    await axios.post(url_calls+'/api/v1/tools/', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "bearer " + data.auth
      }
    })
    .then(function (response) {
      if (typeof response !== 'undefined'
        && response !== null
        && response.status === 200
        && response.statusText === 'OK') {
          if (typeof response.data !== 'undefined'
            && response.data !== null){
            // platform_tools = response.data.
            platform_tools = {}
          }
      }
    })
    .catch(function (error) {
      if (typeof error !== 'undefined' 
        && error !== null 
        && error.email !== '') {
          consola.info('Error, user already exists in the platform')
      }
    });
  } catch (e) {
    this.formError = e.message
  }
  return platform_tools
}

methods.createApp = async(data) => {
  consola.info("data")
  consola.info("-----")
  consola.info(data)
  var app_data = {}
  let auth_token = data.authToken
  // data.pop("authToken")
  consola.info("data")
  consola.info("-----")
  consola.info(data)
  try {
    await axios.post('http://0.0.0.0:9098/api/v1/app/', data.app_data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "bearer " + auth_token
      }
    })
    .then(function (response) {
      consola.info("response")
      consola.info("-|||||-")
      consola.info(response)
      if (typeof response !== 'undefined'
        && response !== null
        && response.status === 201
        && response.statusText === 'Created') {
          if (typeof response.data !== 'undefined'
            && response.data !== null) {
            app_data = response.data
            app_data.status = 201
            app_data.statusText = "Created"
          }
      }
    })
    .catch(function (error) {
      if (typeof error !== 'undefined' 
        && error !== null 
        && error.email !== '') {
          consola.info("Error, can't create the new app")
      }
    });
  } catch (e) {
    this.formError = e.message
  }
  return app_data
}

methods.getApps = async(data) => {
  consola.info("data")
  consola.info("-----")
  consola.info(data)
  var app_data = {}
  let auth_token = data.authToken
  // data.pop("authToken")
  consola.info("auth_token")
  consola.info("-----")
  consola.info(auth_token)
  try {
    // await axios.post('http://0.0.0.0:8000/api/v1/app/', data, {
    await axios.get(url_calls+'/api/v1/app/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "bearer " + auth_token
      }
    })
    .then(function (response) {
      consola.info("response")
      consola.info("-|||||-")
      consola.info(response)
      if (typeof response !== 'undefined'
        && response !== null
        && response.status === 200
        && response.statusText === 'OK') {
          if (typeof response.data !== 'undefined'
            && response.data !== null) {
            app_data = response.data
            app_data.status = 200
            app_data.statusText = "OK"
          }
      }
    })
    .catch(function (error) {
      if (typeof error !== 'undefined' 
        && error !== null 
        && error.email !== '') {
          consola.info("Error, can't retrieve apps data")
      }
    });
  } catch (e) {
    this.formError = e.message
  }
  return app_data
}

methods.getApp = async(data) => {
  consola.info("data")
  consola.info("-----")
  consola.info(data)
  var app_data = {}
  let auth_token = data.authToken
  let app_id = data.appID
  // data.pop("authToken")
  consola.info("auth_token")
  consola.info("-----")
  consola.info(auth_token)
  try {
    // await axios.post('http://0.0.0.0:8000/api/v1/app/', data, {
    await axios.get(url_calls+'/api/v1/app/' + app_id + '/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "bearer " + auth_token
      }
    })
    .then(function (response) {
      consola.info("response")
      consola.info("-|||||-")
      consola.info(response)
      if (typeof response !== 'undefined'
        && response !== null
        && response.status === 200
        && response.statusText === 'OK') {
          if (typeof response.data !== 'undefined'
            && response.data !== null) {
            app_data = response.data
            app_data.status = 200
            app_data.statusText = "OK"
          }
      }
    })
    .catch(function (error) {
      if (typeof error !== 'undefined' 
        && error !== null 
        && error.email !== '') {
          consola.info("Error, can't retrieve apps data")
      }
    });
  } catch (e) {
    this.formError = e.message
  }
  return app_data
}

exports.data = methods