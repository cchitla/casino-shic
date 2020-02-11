import React from 'react';
import './Card.css';

const Card = (props) => {

  let suit;
  switch (props.suit) {
    case "Clubs":
     suit = "2663";
     break;
    case "Diamond":
     suit = "2666";
     break;
    case "Spade":
     suit = "2660";
     break;
    case "Hearts":
     suit = "2665";
     break;
  };


  return (
    <div id="card">
      <div id="card-id">
        <span id="suit-symbol">{JSON.parse(`["\\u${suit}"]`)[0]}</span>
        <span id="card-name">{props.cardName}</span>
      </div>
    </div>
  );
};

export default Card;
