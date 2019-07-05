const express = require('express');
const http = require('http');
const socketio = require('socket.io');
// const path = require('path');
const app = express();
require('./mongoose');

const home = require('./routes/home');
const {addGameRoom} = require('./utils/gameRooms');

const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio(server);

// app.use('/', home);
app.use(home);

io.on('connection', socket => {
  socket.on('join', () => {
    console.log('Client Joined');
    socket.emit('greeting', {message: 'Hello!'});
  });

  socket.on('createRoom', (room, callback) => {
    console.log(room);
    console.log('id: ', socket.id)
    addGameRoom({id: socket.id, gameroom: room});

  })

  socket.on("disconnect", () => console.log("Client Disconnected"));
})



server.listen(port, () => console.log(`Server is up on port: ${port}`)) 