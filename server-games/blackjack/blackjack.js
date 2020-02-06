const deck = require("./deck");
const playersManager = require("./players");

deck.createDealerDeck();

const { players, createPlayer } = playersManager;

const testPlayer = {
    name: "Chris",
    room: "Blackjack 1",
    id: "some socket id",
    hand: ["5", "Q"],
    score: 15
};

createPlayer(testPlayer);

console.log(players);