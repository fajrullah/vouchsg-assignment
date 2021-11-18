'use strict'
const Mongoose = require('mongoose')
const ModelSchema = new Mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: false
  },
  room: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

module.exports = Mongoose.model('Forms', ModelSchema)
