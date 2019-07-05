const games = [];

// Add Game Room
const addGameRoom = ({id, gameroom}) => {
  // clean data 
  gameroom = gameroom.trim().toLowerCase();

  // validate
  if (!gameroom) {
    return {error: 'Gameroom is Required!'}
  }

  // Check if gameroom exists 

  const gameRoom = {id, room: gameroom}
  return gameRoom;
}