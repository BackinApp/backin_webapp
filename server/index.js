const express = require('express');
const { Nuxt, Builder } = require('nuxt');
var bodyParser = require('body-parser');
const app = express();

const consola = require('consola');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';
let asyncFuncs = require('./asyncFunctions/index.js');

function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Add POST - /api/register
  app.post('/api/register', async (req, res) => {
    if (typeof req.body !== 'undefined' && req.body !== null) {
      let data = JSON.stringify({
        username: req.body.username, 
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        repassword: req.body.repassword,
        invitation_code: req.body.invitation_code,
        rol: req.body.rol
      })
      // Do async job
      try {
        let userResponse = await asyncFuncs.data.registerUser(data)
        if (typeof userResponse !== 'undefined') {
          res.status(201).json({
            data: {
              "user_created" : userResponse
            }
          })
        } else {
          res.status(401).json({ message: 'Error in user register' })
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  })

  // Add POST - /api/activate-account
  app.post('/api/activate-account', async (req, res) => {
    if (typeof req.body !== 'undefined' && req.body !== null) {
      let data = JSON.stringify({
        email: req.body.email
      })

      // Do async job
      try {
        if (typeof userResponse !== 'undefined') {
          res.status(200).json({
            data: {
              "user-created" : userResponse
            }
          })
        } else {
          res.status(401).json({ message: 'Bad credentials' })
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  })

  // Add POST - /api/login
  app.post('/api/login', async (req, res) => {
    if (typeof req.body !== 'undefined' && req.body !== null) {
      let data = JSON.stringify({
        email: req.body.email,
        password: req.body.password
      })
      // Do async job
      try {
        let userResponse = await asyncFuncs.data.authUser(data)
        if (typeof userResponse !== 'undefined' && userResponse.status === 200) {
          res.status(200).json({
            data: {
              "user_token" : userResponse.token,
              "username" : userResponse.username,
              "email" : userResponse.email
            }
          })
        } else {
          res.status(401).json({ message: 'Bad credentials' })
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  })

  // Add GET - /api/client/profile
  app.post('/api/client/profile', (req, res) => {
    if (typeof req.body !== 'undefined' && req.body !== null) {
      let data = JSON.stringify({
        email: req.body.email
      })

      // Do async job
      try {
        if (typeof userResponse !== 'undefined') {
          res.status(200).json({
            data: {
              "user_profile" : userResponse
            }
          })
        } else {
          res.status(401).json({ message: 'Bad credentials' })
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  })

  // Add POST - /api/tools/
  app.post('/api/tools/', async (req, res) => {
    if (typeof req.body !== 'undefined' && req.body !== null) {
      let data = {
        auth: req.body.authToken
      }
      // Do async job
      try {
        let userResponse = await asyncFuncs.data.getTools(data)
        if (typeof userResponse !== 'undefined') {
          res.status(200).json({
            data: {
              "user_balance" : userResponse
            }
          })
        } else {
          res.status(401).json({ message: 'Bad credentials' })
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  })

  // Add POST - /api/create-app
  app.post('/api/create-app', async (req, res) => {
    // consola.info("req")
    consola.info("|||||")
    // consola.info(req)
    consola.info("body")
    consola.info("-----")
    consola.info(req.body)
    if (typeof req.body !== 'undefined' && req.body !== null) {
      consola.info("body")
      consola.info("-----")
      consola.info(req.body)
      consola.info("authToken")
      consola.info("-----")
      consola.info(req.body.authToken)
      let data = {
        auth: req.body.authToken
      }
      // Do async job
      try {
        let createAppResponse = await asyncFuncs.data.createApp(req.body)
        consola.info("createAppResponse")
        consola.info("-----")
        consola.info(createAppResponse)
        if (typeof createAppResponse !== 'undefined') {
          res.status(201).json({
            data: {
              "app" : createAppResponse
            }
          })
        } else {
          res.status(401).json({ message: 'Bad credentials' })
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  })

  // Add POST - /api/get-apps
  app.post('/api/get-apps', async (req, res) => {
    if (typeof req.body !== 'undefined' && req.body !== null) {
      let data = {
        authToken: req.body.authToken
      }
      // Do async job
      try {
        let appsResponse = await asyncFuncs.data.getApps(data)
        if (typeof appsResponse !== 'undefined') {
          res.status(200).json({
            data: {
              "apps" : appsResponse
            }
          })
        } else {
          res.status(401).json({ message: 'Bad credentials' })
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  })

  // Add POST - /api/app
  app.post('/api/app', async (req, res) => {
    consola.info("req.body")
    consola.info("---------")
    consola.info(req.body)
    if (typeof req.body !== 'undefined' && req.body !== null) {
      let data = {
        authToken: req.body.authToken,
        appID: req.body.appID
      }
      // Do async job
      try {
        let appResponse = await asyncFuncs.data.getApp(data)
        consola.info("appResponse")
        consola.info("---------")
        consola.info(appResponse)
        if (typeof appResponse !== 'undefined') {
          res.status(200).json({
            data: {
              "app" : appResponse
            }
          })
        } else {
          res.status(401).json({ message: 'Bad credentials' })
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  })

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
