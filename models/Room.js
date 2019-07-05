const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  room: {
    type: String
  }
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room