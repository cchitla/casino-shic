const blackjackTables = [];


const addTable = (newTable) => {
  blackjackTables.push(newTable);
};

const getTables = () => {
  return blackjackTables;
};

const getTable = (tableName) => {
  // console.log("am i here?")
  return blackjackTables.find((table) => tableName === table.tableName)
}

const addPlayerToTable = (player) => {
  blackjackTables.forEach(table => {
    if (player.tableName === table.tableName) {
      table.players.push(player)
    };
  });
};

const createDealer = (tableName) => {
  let dealer = {
    name: "Dealer",
    tableName,
    hand: [],
    currentTurn: false,
    score: 0,
    bust: false
  };
  return { dealer };
};

module.exports = {
  blackjackTables,
  addTable,
  getTables,
  getTable,
  addPlayerToTable,
  createDealer
};
