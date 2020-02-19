import React, { useState } from 'react';
import './Table.css'
import Card from '../Card/Card';
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
      <span>
        <button className="custom-btn" value={5} onClick={e => placeBet(e)}>Bet 5</button>
    <span className="player-money" >You have $ {props.earnings}</span>
        <button className="custom-btn" value={10} onClick={e => placeBet(e)}>Bet 10</button>
      </span>
    );
  };

  const renderGameButtons = () => {
    return (
      <div id="">
        <button className="custom-btn" onClick={props.hitCard}>Hit</button>
        <button className="custom-btn" onClick={props.stayHand} >Stay</button>
      </div>
    );
  };

  const startGame = (e) => {
    e.preventDefault();
    props.setGameIsActive(true);
    props.setBetting(true);
  };

  const renderButtons = () => {
    if (!props.gameIsActive) return <button className="custom-btn" onClick={startGame}>Start Game</button>;
    if (props.betting && !props.playerBet) return renderBetButtons();
    if (props.currentTurn && !props.winners) return renderGameButtons();
  };

  const renderWinners = (winners) => {
    if (winners) return <p>Winner: {winners.name}</p>
    return <p>No one won this hand</p>
  };

  return (
    <>
    <div id="blackjackTable">
    <Row id="game-row">
      <Col>
        <div id="dealerInfo">
          <div>Dealer</div>
          {console.log(props.dealer)}
          <div>Dealer Score: {props.dealer && props.dealer[0].currentTurn ? props.dealer[0].score : ""}</div>
          <div>Dealer hand<div>
              {props.dealer
                ?  props.dealer[0].hand.map((card) => (
                  <Card key={Math.random()} suit={card.suit} cardName={card.cardName}/>)) : null}
            </div>
          </div>
        </div>
      </Col>

      <Col>
        <div id="blackjackPlayerInfo">
          <div>{props.joinedPlayers.map((player) => <span key={player.name}>{player.name}</span>)}</div> 
          <div>Your score: {props.playerScore}</div>
          <div>{props.playerHand && <span>Your hand</span>}</div>
        </div>

        <div>{props.playerHand
          ? props.playerHand.map((hand) => (
            <Card key={Math.random()} suit={hand.suit} cardName={hand.cardName} />)) : null}
        </div>
        </Col>
        
    </Row>
    <Row>
      <Col>
      <div className="winner-text text-center">{props.winners ? renderWinners(props.winners) : null}</div>
      </Col>
    </Row>
            
    <Row className="btn-row-bottom">
      <Col>
        <div className="game-buttons text-center">{renderButtons()}</div>
      </Col>
    </Row>

    </div>
    </>
  );
};

export default Table;
