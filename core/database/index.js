const Mongoose = require('mongoose')
const { URI } = require('../config')
/**
 * Class DB
 */
class Database {
  constructor () {
    this._connect()
  }

  _connect () {
    Mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then((res) => {
        console.log('Database connection successful')
      })
      .catch(_err => {
        console.log(_err)
        console.error('Database connection error')
      })
  }
}

module.exports = new Database()
