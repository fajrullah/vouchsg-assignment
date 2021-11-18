'use strict'
const appRoot = require('app-root-path')
const fs = require('fs')
const componentsPath = `${appRoot}/app`

// eslint-disable-next-line handle-callback-err
/**
 * Default Routes
 */
const publicRoute = ['public']

module.exports = (app) => {
  fs.readdir(componentsPath, (_err, folders) => {
    folders.forEach(folder => {
      if (publicRoute.indexOf(folder) >= 0) {
        const path = `${componentsPath}/${folder}/${folder}Route`
        const route = require(path)
        route(app)
      }
    })
  })
}
