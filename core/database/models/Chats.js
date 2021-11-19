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
  roomName: {
    type: String,
    required: false
  },
  text: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = Mongoose.model('Chats', ModelSchema)
