'use strict'
const config = require('./core/config')
const server = require('./app/app')
const socket = require('./app/socket')
const port = config.port || 5000
const appListen = server.listen(port, () => {
  console.log('Now is running ', port)
})
socket(appListen)
