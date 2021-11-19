const controller = require('./controller')
module.exports = (app) => {
  app.get('/chat', controller.getChat)
}
