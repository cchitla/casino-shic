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

export const JoinGame = (props) => {
  const handleClick = ({player, joinedPlayers, setJoinedPlayers}) => {
    let updatedPlayers = [...joinedPlayers];
    updatedPlayers.push(player);
    setJoinedPlayers(updatedPlayers);
  };

  return (
    <button onClick={e => handleClick(props)}>Join</button>
  );
};