let players = [];

const setPlayer = (newPlayer) =>  {
  
  let player = {
    name: newPlayer.name,
    tableName: newPlayer.room,
    tablePosition: newPlayer.tablePosition,
    id: newPlayer.id,
    hand: [],
    score: 0,
    bust: false
  };

  players.push(player);
};

const removePlayer = (id) => {
  // console.log("before delete player", players);
  const remainingPlayers = players.filter((player) => player.id !== id);
  players = remainingPlayers;
  // console.log("deleted a player:", players);
};

const getPlayer = (id) => players.find((player) => player.id === id);

const getPlayersAtTable = (tableName) => players.filter((player) => player.tableName === tableName);

module.exports = {
  players,
  setPlayer,
  removePlayer,
  getPlayer,
  getPlayersAtTable,
};