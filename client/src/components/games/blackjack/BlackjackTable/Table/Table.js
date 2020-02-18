import React, { useState } from 'react';
import './Table.css'
import Card from '../Card/Card';
import PlayerContainer from '../PlayerContainer/PlayerContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Table = (props) => {

  const placeBet = (e) => {
    e.preventDefault();
    let bet = parseInt(e.target.value)
    props.setPlayerBet(bet);
  };

  const renderBetButtons = () => {
    return (
      <span id="blackjackButtons">
        <button value={5} onClick={e => placeBet(e)}>Bet 5</button>
        <button value={10} onClick={e => placeBet(e)}>Bet 10</button>
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
  };

  const renderButtons = () => {
    if (!props.gameIsActive) return <button onClick={startGame}>Start Game</button>;
    if (props.betting && !props.playerBet) return renderBetButtons();
    if (props.currentTurn && !props.winners) return renderGameButtons();
  };

  const renderWinners = (winners) => {
    if (winners) {
      return <p>Winner: {winners.name}</p>
    };
    return <p>No one won this hand</p>
  };

  return (
    <>
    <div id="blackjackTable">
    <Row>
      <Col>
        <div id="dealerInfo">
          <div>Dealer</div>
          <div>Dealer Score: {props.dealer && props.dealer.score}</div>
          <div>Dealer Hand<div>
              {console.log(props.dealer)}
              {props.dealer
                ?  props.dealer[0].hand.map((card) => (
                  <Card key={Math.random()} suit={card.suit} cardName={card.cardName} />)) : null}
            </div>
          </div>
        </div>
      </Col>

      <Col>
        <div id="blackjackPlayerInfo">
          <div>{props.joinedPlayers.map((player) => <span key={player.name}>{player.name}</span>)}</div> 
          <div>Your score: {props.playerScore}</div>
          <div> {props.playerBust && <span>You lose!</span>} </div>
          <div>{props.playerHand && <span>Your hand:</span>}</div>
        </div>

        <div>{props.playerHand
          ? props.playerHand.map((hand) => (
            <Card key={Math.random()} suit={hand.suit} cardName={hand.cardName} />)) : null}
        </div>
        <div>{props.winners ? renderWinners(props.winners) : null}</div>
        </Col>
      
    
    </Row>
    </div>
    {renderButtons()}
    </>
  );
};

export default Table;
