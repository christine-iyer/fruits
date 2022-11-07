// //////////////////////////////////////
// Dependencies
/// //////////////////////////////////////
require('dotenv').config() // Load ENV Variables
const express = require('express') // import express
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')

/// //////////////////////////////////
// MiddleWare Function
/// ///////////////////////////////////

const middleware = (app) => {
  app.use(express.urlencoded({ extended: true })) // parse urlencoded request bodies
  app.use(express.json())
  app.use((req, res, next) => {
    res.locals.data = {}
    next()
  })
  app.use(methodOverride('_method')) // override for put and delete requests from forms
  app.use(express.static('public')) // serve files from public statically
  app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
      saveUninitialized: true,
      resave: false
    })
  )
  app.use(cors())
  app.engine('jsx', require('jsx-view-engine').createEngine())
  app.set('view engine', 'jsx') // register the jsx view engine
}

/// ////////////////////////////////////////
// Export Middleware Function
/// ///////////////////////////////////////
module.exports = middleware