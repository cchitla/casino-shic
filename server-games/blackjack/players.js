let  playersArray = [];


const createPlayer = (user) =>  {
  // player should come from socket user { (socket)id,  name, room }
  let player = {
    name: user.name,
    room: user.room,
    id: user.id,
    hand: [],
    score: 0
  };

  playersArray.push(player);
};

module.exports = {
  playersArray,
  createPlayer
};