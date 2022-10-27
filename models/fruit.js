const mongoose = require('mongoose')

// Make a Schema
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean
})

// Make a Model from the Schema
// the Frut model allows us to use the CRUD Create Read Update Destroy in the app

const Fruit = mongoose.model('Fruit', fruitSchema)
// making a fruits collection

// Export the Model for Use in the App
module.exports = Fruit
