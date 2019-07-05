const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
// const home_controller = require('../controller/home');

router.post('/room', async (req, res) => {
  const room = new Room(req.body);
  try {
    await room.save();
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);    
  }
})

module.exports = router;