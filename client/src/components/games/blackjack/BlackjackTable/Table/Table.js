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
    if (props.currentTurn && !props.winners) return renderGameButtons();
  };

  const renderWinners = (winners) => {
    console.log(winners)
    if (winners) {
      return <p>Winner: {winners.name}</p>
    } 
    return <p>No one won this hand</p>
  };

  return (
    <>
      <div id="blackjackTable">
        <div id="blackjackPlayerInfo">
          {props.joinedPlayers.map((player) => <span key={player.name}>{player.name}</span>)}
          <p>Your score: {props.playerScore}</p>
          <p> {props.playerBust && <span>You lose!</span>} </p>
          <p>{props.playerHand && <span>Your hand:</span>}</p>
        </div>

        <div>{props.playerHand
          ? props.playerHand.map((hand) => (
            <Card key={Math.random()} suit={hand.suit} cardName={hand.cardName} />)) : null}
        </div>
        <div>{props.winners ? renderWinners(props.winners) : null}</div>

        {/* {(props.betting && !props.handActive) ? <Countdown date={Date.now() + 10000} onComplete={handleComplete} /> : null} */}
      </div>
      {renderButtons()}
    </>
  );
};

export default Table;
