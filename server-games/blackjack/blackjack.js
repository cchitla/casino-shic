const deck = require("./deck");
const players = require("./players");

deck.createDealerDeck();
// console.log(deck.dealerDeck);

const { playersArray, createPlayer } = players;

const testPlayer = {
    name: "Chris",
    room: "Blackjack 1",
    id: "some socket id",
    hand: ["5", "Q"],
    score: 15
};

createPlayer(testPlayer);

console.log(playersArray);