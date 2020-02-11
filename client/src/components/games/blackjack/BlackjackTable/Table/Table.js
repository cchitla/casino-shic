import React, { useState } from 'react';
import './Table.css'
import Card from '../Card/Card';
import PlayerContainer from '../PlayerContainer/PlayerContainer';
// import Countdown from "react-countdown-now";


const Table = (props) => {
  // const [clickedBet, setClickedBet] = useState(false);

  const placeBet = (e) => {
    e.preventDefault();
    props.setPlayerBet(e.target.value);
    // setClickedBet(true);
  };

  const renderBetButtons = () => {
    return (
      <span id="blackjackButtons">
        <button value="5" onClick={e => placeBet(e)}>Bet 5</button>
        <button value="10" onClick={e => placeBet(e)}>Bet 10</button>
      </span>
    );
  };

  const renderGameButtons = () => {
    return (
      <span id="blackjackButtons">
        <button onClick={props.hitCard}>Hit</button>
        <button onClick={props.stayHand} >Stay</button>
      </span>
    );
  };

  const startGame = (e) => {
    e.preventDefault();
    props.setGameIsActive(true);
    props.setBetting(true);
  }

  // const handleComplete = () => {
  //   if (!storedBet) {
  //     props.setPlayerBet(5);
  //   }
  //   props.setPlayerBet(storedBet)
  //   props.setBetting(false);
  //   props.setHandActive(true);
  // };

  const renderButtons = () => {
    if (!props.gameIsActive) return <button onClick={startGame}>Start Game</button>;
    if (props.betting && !props.playerBet) return renderBetButtons();
    if (props.handActive) return renderGameButtons();
  };

  return (
    <>
      <div id="blackjackTable">
        {props.joinedPlayers.map((player) => <span key={player.name}>{player.name}</span>)}
        {/* {(props.betting && !props.handActive) ? <Countdown date={Date.now() + 10000} onComplete={handleComplete} /> : null} */}
        <Card />
        <PlayerContainer />
      </div>
        {renderButtons()}
    </>
  );
};

export default Table;
