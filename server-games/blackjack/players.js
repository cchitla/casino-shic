let players = [];

const setPlayer = (socket, name, tableName, bet = 0, hand = [], score = 0, bust = false) =>  {

  const existingPlayer = getPlayer(name, tableName);
  if (existingPlayer) {
    removePlayer(existingPlayer.id);  
  };

  let player = {
    name,
    tableName,
    id: socket.id,
    bet,
    hand,
    currentTurn: false,
    score,
    bust
  };

  players.push(player);
  return { player };
};

const removePlayer = (id) => {
  console.log("before delete player", players);
  const remainingPlayers = players.filter((player) => player.id !== id);
  players = remainingPlayers;
};

const getPlayer = (name, tableName) => {
  players.find((player) => player.name === name && player.tableName === tableName)
};

const getPlayerById = (id) => players.find((player) => player.id === id );

const getPlayersAtTable = (tableName) => players.filter((player) => player.tableName === tableName);

module.exports = {
  players,
  setPlayer,
  removePlayer,
  getPlayer,
  getPlayersAtTable,
  getPlayerById,
};