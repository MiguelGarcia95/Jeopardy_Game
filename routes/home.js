const express = require('express');
const router = express.Router();
// const home_controller = require('../controller/home');

router.get('/', (req, res) => {
  res.send({response: 'WORKS!'}).status(200);
});

router.post('/createRoom', (req, res) => {
  console.log(req.body);
  // res.send(req).status(200);
})

module.exports = router;