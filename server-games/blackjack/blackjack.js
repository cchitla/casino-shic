const { createDealerDeck, shuffleDeck } = require("./deck");
const { players, setPlayer, getPlayersAtTable, removePlayer, getPlayer } = require("./players");
const { addTable } = require("./tables");


const createNewTable = (tableName, playerCount) => {
    let dealerDeck = shuffleDeck(createDealerDeck())
    let newTable =  { tableName, players: playerCount || 0, deck: dealerDeck};
    addTable(newTable);
}; 

//create a default table
createNewTable("House Table 1", 1);
createNewTable("House Table 2", 4);

let table = "my new table"
// createNewTable(table)
// console.log(blackjackTables);

const dealTable = () => {
    // run getPlayersAtTable
    // forEach, pop one card
};

const addCards = (hand) => {
    //add up cards
    // if sum > 21 then update player.bust = true
};

module.exports = {
    players,
    setPlayer,
    getPlayersAtTable,
    createNewTable,
    removePlayer,
    getPlayer
};