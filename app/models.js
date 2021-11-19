
/**
 * Class Models
 */
const Chats = require('../core/database/models/Chats')
class ChatModels {
  async joinUser (data) {
    let result = await Chats.findOne({ userName: data.userName, roomName: data.roomName })
    if (!result) {
      result = await Chats.create(data)
    }
    const show = await Chats.find({ roomName: data.roomName })
    return show
  }

  async getMessages (data) {
    const result = await Chats.find({ roomName: data.roomName })
    return result
  }

  async sendMessages (data) {
    const result = await Chats.create(data)
    return result
  }
}

module.exports = new ChatModels()
