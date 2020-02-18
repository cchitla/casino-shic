const { createDealerDeck, shuffleDeck } = require("./deck");
const { players, setPlayer, getPlayersAtTable, removePlayer, getPlayer, getPlayerById, getPlayerByName } = require("./players");
const { addTable, getTable, addPlayerToTable } = require("./tables");


const createNewTable = (tableName) => {
    let dealerDeck = shuffleDeck(createDealerDeck())
    let newTable = { tableName, players: [], betsReceived: 0, deck: dealerDeck, active: false };
    addTable(newTable);
};

//create a default table
createNewTable("House Table 1");
createNewTable("House Table 2");


const dealTable = (table) => {
    const { players, deck } = table;
    for (let i = 0; i < players.length; i++) {
        players[i].hand = [deck[i], deck[i + players.length]];
    }
    calculateScoreOnDeal(table);
    let cardsDealt = players.length * 2;
    deck.splice(0, cardsDealt);
};

const calculateScoreOnDeal = (table) => {
    const { players } = table;
    players.forEach(player => console.log("player hands:", player.hand))
    players.forEach(player => {
        let score = 0;
        for (let i = 0; i < player.hand.length; i++) {
            if (player.hand[i].value === "A") player.hand[i].value = 11;
            score += player.hand[i].value;
        };
        player.score = score;
    });
};

const dealCard = (player, table) => {
    const { hand } = player;
    const { deck } = table;
    let nextCard = deck.shift();
    // console.log("next card", nextCard);
    hand.push(nextCard);
    countScoreOnHit(hand, player);
};

const countScoreOnHit = (hand, player) => {
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].value === "A") {
            hand[i].value = 11;
            hasAce = true;
        };
        score += hand[i].value;
    };
    player.score = score;

    if (score > 21 && hasAce) {
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].value === "A") {
                hand[i].value = 1;
                hasAce = true;
            };
            score += hand[i].value;
        };
    };

    if (score > 21) player.bust = true;
};

const nextPlayerTurn = (player, table, socket) => {
    console.log(('next player'));

    const { players } = table;
    currentIndex = players.findIndex(player => player.id === socket.id);
    player.currentTurn = false;
    players[currentIndex + 1].currentTurn = true;
    if (players[currentIndex + 1].name === "Dealer") {
        dealerTurn(table);
    };
};

const dealerTurn = (table) => {
    let dealer = table.players[table.players.length - 1];
    console.log(dealer);
    let winners;
    if (dealer.score <= 16) {
        dealCard(dealer, table);
        dealerTurn(table);
    } else if (dealer.score <= 21) {
        console.log("dealer turn is done, no bust");
        winners = endHand(table, false);
        console.log("we have ended hand")
        setWinners(winners, table);
    } else if (dealer.score > 21) {
        console.log("dealer turn is done, dealer busts");
        winners = endHand(table, true);
        console.log("we have ended hand")
        setWinners(winners, table);
    };
};

const endHand = (table, dealerBust) => {
    console.log("end hand function")
    if (!table) console.log("endHand is not getting table")
    const { players } = table;
    let highestScore = 0;
    let winners = [];

    if (dealerBust) {
        players.forEach(player => {
            if (!player.bust) {
                winners.push(player);
            };
        });
    };

    if (!dealerBust) {
        players.forEach(player => {
            if (player.score <= 21 && player.score > highestScore) {
                highestScore = player.score;
                winners = [];
                winners.push(player);
            } else if (player.score <= 21 && player.score === highestScore) {
                winners.push(player);
            };
        });
    };

    return winners;
};

const setWinners = (winners, table) => {
    console.log("setting winners at table", winners);
    if (!table) {
        console.log("not getting table for some reason")
        return;
    }
    const { players } = table;
    players.forEach(player => {
        winners.forEach(winner => {
            if (player.name === winner.name) {
                player.won = true;
            };
        });
    });
    table.status = "completed"
    console.log(table);
};

const getWinners = (table) => table.players.find(player => player.won === true);

module.exports = {
    players,
    setPlayer,
    getPlayersAtTable,
    getPlayerById,
    createNewTable,
    removePlayer,
    getPlayer,
    getTable,
    dealTable,
    addPlayerToTable,
    getPlayerByName,
    dealCard,
    nextPlayerTurn,
    getWinners
};