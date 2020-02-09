import React, { useState } from 'react';
import './Table.css'
import Card from '../Card/Card';
import PlayerContainer from '../PlayerContainer/PlayerContainer';
import { JoinGame, StartGame, Bet, Hit, Stay } from '../Buttons/Index';

const Table = (props) => {

  let player = props.profile.username;

  const handlePlayerJoin = () => {

  }

  const renderButtons = () => {
    return (
      <span id="blackjackButtons">
        <JoinGame player={props.player} joinedPlayers={props.joinedPlayers} setJoinedPlayers={props.setJoinedPlayers} />
        <StartGame /><Bet amount={5} /><Hit /><Stay />
      </span>
    );
  };

  return (
    <>
      <div id="blackjackTable">
        <Card />
        <PlayerContainer />
      </div>
      {props.gameIsActive ? renderButtons() : null};

    </>
  );
};

export default Table;
