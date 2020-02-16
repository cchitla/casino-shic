const { createDealerDeck, shuffleDeck } = require("./deck");

const blackjackTables = [];

const addTable = (newTable) => {
  blackjackTables.push(newTable);
};

const getTables = () => {
  return blackjackTables;
};

const getTable = (tableName) => {
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

const removePlayerFromTable = (id, tableName) => {
  let table = getTable(tableName)
  if (table) {
    const remainingPlayers = table.players.filter((player) => player.id !== id);
    table.players = remainingPlayers;
    console.log("after removing player", blackjackTables);
  }
};

const removeTable = (tableName) => {
  let remainingTables = blackjackTables.filter((table) => table.tableName !== table);
  blackjackTables = remainingTables;
}

const resetTable = (table) => {
  if (table.players.length <= 1) {
    blackjackTables.forEach(updateTable => {
      if (updateTable.tableName === table.tableName) {
        updateTable.players = [],
        updateTable.betsReceived = 0,
        updateTable.deck = shuffleDeck(createDealerDeck())
      };
    });
  };
};

module.exports = {
  blackjackTables,
  addTable,
  getTables,
  getTable,
  addPlayerToTable,
  createDealer,
  removePlayerFromTable,
  resetTable
};
