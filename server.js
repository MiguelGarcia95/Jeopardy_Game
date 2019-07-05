const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const home = require('./routes/home');
const app = express();

const port = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketio(server);

app.use('/', home);

io.on('connection', socket => {
  socket.on('join', () => {
    console.log('Client Joined');
    socket.emit('greeting', {message: 'Hello!'});
  });

  socket.on('createRoom', (room, callback) => {
    console.log(room);
    console.log('id: ', socket.id)

  })

  socket.on("disconnect", () => console.log("Client Disconnected"));
})


server.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
}) 