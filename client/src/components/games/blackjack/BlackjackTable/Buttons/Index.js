import React from 'react';
import './Buttons.css'

export const Hit = () => {
  return (
    <button>Hit</button>
  );
};

export const Stay = () => {
  return (
    <button>Stay</button>
  );
};

export const Bet = (props) => {
  return (
    <button>Bet {props.amount}</button>
  );
};

export const StartGame = () => {
  return (
    <button>Start</button>
  );
};
