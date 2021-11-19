/**
 * Socket
 */
module.exports = (server) => {
  const socket = require('socket.io')

  const Chats = require('./models')

  const io = socket(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST']
    }
  })

  // initializing the socket io connection
  io.on('connection', (socket) => {
    // for a new user joining the room
    socket.on('joinRoom', async ({ userName, roomName }) => {
      //* create user
      // const p_user = await join_User(socket.id, username, roomname)

      const show = await Chats.joinUser({ userId: socket.id, userName, roomName, text: `Welcome ${userName}` })

      socket.join(roomName)

      // // display a welcome message to the user who have joined a room
      // socket.emit('message', {
      //   userId,
      //   userName: user,
      //   text: `Welcome ${user}`
      // })

      // // displays a joined room message to all other room users except that particular user
      // socket.broadcast.to(room).emit('message', {
      //   userId,
      //   userName: user,
      //   text: `${user} has joined the chat`
      // })
      io.to(roomName).emit('message', show)
    })

    // user sending message
    socket.on('chat', async (data) => {
      const { roomName } = data
      data.userId = socket.id
      await Chats.sendMessages(data)
      const messages = await Chats.getMessages({
        roomName
      })
      io.to(roomName).emit('message', messages)
    })
  })
}
