const mongoose = require('mongoose')

// Make A Schema
const fruitSchema = new Schema({
  symbol: { type: String, required: true },
  purchasePrice: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  regularMarketDayHigh: { type: Number, default: 0 },
  fullExchangeName: { type: String }
})

// Make A Model From The Schema

const Fruit = mongoose.model('Fruit', fruitSchema)

// Export The Model For Use  In The App

module.exports = Fruit