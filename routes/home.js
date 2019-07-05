const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
// const home_controller = require('../controller/home');

router.get('/', (req, res) => {
  res.send({response: 'WORKS!'}).status(200);
});

router.post('/createRoom', async (req, res) => {
  // console.log(req.body);
  const room = new Room(req.body);
  try {
    await room.save();
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);    
  }
})

module.exports = router;