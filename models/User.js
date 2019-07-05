const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  }
})

const User = mongoose.model('Room', userSchema);

module.exports = User