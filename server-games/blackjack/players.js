let  players = [];


const createPlayer = (user) =>  {
  // player should come from socket user { (socket)id,  name, room }
  let player = {
    name: user.name,
    tableName: user.room,
    id: user.id,
    hand: [],
    score: 0
  };

  players.push(player);
};

const removePlayer = (id) => {
  const index = players.findIndex((player) => user.id === id);
  console.log("removing user");
  if (index !== -1) return players.splice(index, 1)[0];
};

const getPlayer = (name) => players.find((player) => player.id === id);

const getPlayersAtTable = (tableName) => players.filter((player) => player.room === tableName);

module.exports = {
  players,
  createPlayer
};