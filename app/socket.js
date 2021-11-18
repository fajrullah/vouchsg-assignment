/**
 * Socket
 */
module.exports = (server) => {
  const socket = require('socket.io')

  const { get_Current_User, user_Disconnect, join_User } = require('../dummyuser')

  const io = socket(server)

  // initializing the socket io connection
  io.on('connection', (socket) => {
    // for a new user joining the room
    socket.on('joinRoom', ({ username, roomname }) => {
      //* create user
      const p_user = join_User(socket.id, username, roomname)
      socket.join(p_user.room)

      // display a welcome message to the user who have joined a room
      socket.emit('message', {
        userId: p_user.id,
        username: p_user.username,
        text: `Welcome ${p_user.username}`
      })

      // displays a joined room message to all other room users except that particular user
      socket.broadcast.to(p_user.room).emit('message', {
        userId: p_user.id,
        username: p_user.username,
        text: `${p_user.username} has joined the chat`
      })
    })

    // user sending message
    socket.on('chat', (text) => {
      // gets the room user and the message sent
      const p_user = get_Current_User(socket.id)
      console.log('HERE', text)
      io.to(p_user.room).emit('message', {
        userId: p_user.id,
        username: p_user.username,
        text: text
      })
    })

    // when the user exits the room
    socket.on('disconnect', () => {
      // the user is deleted from array of users and a left room message displayed
      const p_user = user_Disconnect(socket.id)

      if (p_user) {
        io.to(p_user.room).emit('message', {
          userId: p_user.id,
          username: p_user.username,
          text: `${p_user.username} has left the chat`
        })
      }
    })
  })
}
