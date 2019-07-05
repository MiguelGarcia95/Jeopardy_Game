const Room = require('../models/Room');

const games = [];

// Add Game Room
const addGameRoom = async ({id, gameroom}) => {
  const room = new Room(req.body);

  // clean data 
  gameroom = gameroom.trim().toLowerCase();

  // validate
  if (!gameroom) {
    return {error: 'Gameroom is Required!'}
  }

  // Check if gameroom exists 

  const gameRoom = {id, room: gameroom}

  await room.save();

  return gameRoom;
}

module.exports = {
  addGameRoom
}