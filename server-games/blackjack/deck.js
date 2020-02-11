const suits = ["Diamond", "Clubs", "Spade", "Hearts"];
const cardNames = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

let dealerDeck = [];
let newDeck = [];

const createDeck = () => {
  newDeck = [];
  let card = {};
  suits.forEach(suit => {
    cardNames.forEach(cardName => {
      let value;
      cardName === "J" ? value = 10
        : cardName === "Q" ? value = 10
        : cardName === "K" ? value = 10
        : value = cardName;

      card = { suit, cardName, value };
      newDeck.push(card);
    });
  });
  newDeck.forEach(card => dealerDeck.push(card));
};

const createDealerDeck = () => {
  dealerDeck = [];
  createDeck();
  // createDeck();
  return dealerDeck;
};

const shuffleDeck = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  };
  return array;
};

module.exports = {
  dealerDeck,
  newDeck,
  createDeck,
  createDealerDeck,
  shuffleDeck
};