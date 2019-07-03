const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 5000;
