require('dotenv').config()

const db = require('./db')
const Fruit = require('./fruit')

const starterFruits = [
  { symbol: "GOOGL", purchasePrice: 143.49,  shares: 100 },
  { symbol: "TSLA", purchasePrice: 242.54, shares: 45 },
  { symbol: "AMZN", purchasePrice: 160.00, shares: 80 },
  { symbol: "BA", purchasePrice: 188.59, shares: 25},
  { symbol: "COIN", purchasePrice: 257.31, shares:50 },
  { symbol: "AAPL", purchasePrice: 114.56, shares:200},
  { symbol: "CVS", purchasePrice: 89.83, shares: 25 },
  { symbol: "GS", purchasePrice: 342.94, shares: 10 },
  { symbol: "MS", purchasePrice: 98.39, shares: 25 },
  { symbol: "NVDA", purchasePrice: 293.75, shares: 5 },
  { symbol: "PYPL", purchasePrice: 191.57, shares: 10 },
  { symbol: "PFE", purchasePrice: 47.45, shares: 100 },
  { symbol: "CRM", purchasePrice: 160.38, shares: 20 },
  { symbol: "SBUX", purchasePrice: 102.99, shares: 25 },
  { symbol: "DIS", purchasePrice: 151.93, shares: 10 },
  { symbol: "VTI", purchasePrice: 239.05, shares: 10 },
  { symbol: "LI", purchasePrice: 32.53, shares: 225 }
]


Fruit.deleteMany({})
    .then(() => {
      Fruit.create(starterFruits)
        .then((createdFruits) => {
            console.log('created fruits:', createdFruits)
            db.close()
        })
        .catch(err => {
            console.log(err)
            db.close()
        })  
    }).catch(err => {
        console.log(err)
        db.close()
    })