const express = require('express');
const http = require('http');
const socketio = require('socket.io');

// Server Set Up
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio(server);
require('./mongoose');

// Routes
const room = require('./routes/room');
const user = require('./routes/user');

// Util Functions
const {addGameRoom} = require('./utils/gameRooms');

app.use(room);
app.use(user);

io.on('connection', socket => {
  socket.on('join', () => {
    console.log('Client Joined');
    socket.emit('greeting', {message: 'Hello!'});
  });

  socket.on('createRoom', (room, callback) => {
    const createdRoom = addGameRoom({id: socket.id, gameroom: room});
    socket.emit('createdRoom', {room: createdRoom});
    callback();
  })

  socket.on("disconnect", () => console.log("Client Disconnected"));
})

server.listen(port, () => console.log(`Server is up on port: ${port}`)) 