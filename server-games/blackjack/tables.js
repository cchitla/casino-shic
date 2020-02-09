const blackjackTables = [];


const addTable = (newTable) => {
  blackjackTables.push(newTable);
};

const getTables = () => {
  return blackjackTables;
};

const getDeckAtTable = (tableName) => {
  return blackjackTables.find((table) => tableName === table.tableName)
}

module.exports = {
  blackjackTables,
  addTable,
  getTables,
  getDeckAtTable
};
