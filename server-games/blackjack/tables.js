const blackjackTables = [];


const addTable = (newTable) => {
  blackjackTables.push(newTable);
};

const getTables = () => {
  return blackjackTables;
};


module.exports = {
  blackjackTables,
  addTable,
  getTables
};
