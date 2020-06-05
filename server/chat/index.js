function runsocket(io) {

  io.on('connection', socket => {
    socket.on('new message', function (msg) {
      io.emit('new message', msg)
    })  
  })
  
}

export default runsocket