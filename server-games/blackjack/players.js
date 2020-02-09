let players = [];

const setPlayer = (socket, name, tableName) =>  {

  const existingPlayer = getPlayer(name, tableName);
  if (existingPlayer) {
    removePlayer(existingPlayer.id);  
  };

  let player = {
    name,
    tableName,
    tablePosition: 0,
    id: socket.id,
    hand: [],
    score: 0,
    bust: false
  };

  players.push(player);
  return { player };
};

const removePlayer = (id) => {
  // console.log("before delete player", players);
  const remainingPlayers = players.filter((player) => player.id !== id);
  players = remainingPlayers;
  // console.log("deleted a player:", players);
};

const getPlayer = (name, tableName) => {
  let foundPlayer = players.find((player) => player.name === name && player.tableName === tableName);
  return foundPlayer;
}

const getPlayersAtTable = (tableName) => players.filter((player) => player.tableName === tableName);

module.exports = {
  players,
  setPlayer,
  removePlayer,
  getPlayer,
  getPlayersAtTable,
};