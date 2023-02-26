require('dotenv').config()
// Require modules
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const session = require("express-session");
const MongoStore = require("connect-mongo");
const db = require('./models/db')
const app = express()

// Configure the app (app.set)
/* Start Config */
app.use(cors())
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body <=============
app.use(express.json())

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    saveUninitialized: true,
    resave: false,
  })

  
)

const getResults = async () => {
  try {
    const response = await fetch('https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GOOGL%2CAMZN%2CAAPL%2CBA%2CCOIN%2CCVS%2CGS%2CMS%2CNVDA%2CPYPL%2CPFE%2CCRM%2CSBUX%2CTSLA%2CDIS%2CVTI%2CLI', {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    })
    const data = await response.json()
    setResults(data.quoteResponse.result)
    console.log(data)

    return data
  } catch (e) {
    console.error(e);
    setErrorMessage(e.message);
    return e.message
  }
}

app.use('/fruits', require('./controllers/routeController'))
// send all "/fruits" routes to main router (in a more advanced app we could have multiple routers for multiple paths)
app.use('/user', require('./controllers/authController'))
// send all "/user" routes to auth router
app.get('/', (req, res) => {
  res.render('Home.jsx')
})
/* END Middleware */

// Tell the app to listen on a port
// app.listen(3000, () => {
//   console.log('Listening on Port 3000')
// })
// in your code
const PORT = process.env.PORT || 8000

// at the bottom
app.listen(PORT, () => {
  console.log('We in the building', PORT)
})