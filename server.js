const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = socketio(server);

app.use('/', home);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
}) 