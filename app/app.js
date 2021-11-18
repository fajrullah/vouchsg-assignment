'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')
const { publicRoute, isEntityFalse, clientErrorHandler } = require('../core')

const app = express()

/**
 * Database Connection
 */
require('../core/database')

/**
 * Security prevent using helmet
 */
app.use(helmet())
app.use(helmet.hidePoweredBy({ setTo: 'PHP 7.0.0' })) // Fake function
app.use(cors())
app.use(express.json({
  limit: '2mb'
}))

/**
 * In order to get access to the post data we have to use body-parser
 */
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
/**
 * If validator fail, Send ERROR to client
 */
app.use(isEntityFalse)

/**
 * Using swagger for documentation API
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

publicRoute(app)

app.use(clientErrorHandler)

module.exports = app
