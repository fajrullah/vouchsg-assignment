const Chat = require('./models')
module.exports = {
  getChat: async (req, res) => {
    try {
      const roomName = req.query.roomName
      let messages = []
      if (!roomName) {
        messages = await Chat.getMessages({ roomName })
      }
      return res.json(messages)
    } catch (err) {
      return res.sendStats(400)
    }
  }
}
