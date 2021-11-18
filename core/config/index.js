'use strict'
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  URI: process.env.URI
}
