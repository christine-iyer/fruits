const Fruit = require('../models/fruit')

const dataController = {
  // Index,
  index (req, res, next) {
    Fruit.find({ username: req.session.username }, (err, foundFruits) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else { 



        res.locals.data.fruits = foundFruits
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.fruit = deletedFruit
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.shares = req.body.shares > 0
    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.fruit = updatedFruit
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.shares = req.body.shares > 0
    req.body.username = req.session.username
    Fruit.create(req.body, (err, createdFruit) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.fruit = createdFruit
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Fruit.findById(req.params.id, (err, foundFruit) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a fruit with that ID'
        })
      } else {
        res.locals.data.fruit = foundFruit
        next()
      }
    })
  }
}

module.exports = dataController