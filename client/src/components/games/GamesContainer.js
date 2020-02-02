import React from 'react';
import { Container } from 'react-bootstrap';
import LobbyChat from '../chat/LobbyChat';
import Craps from './craps/Craps';
import Blackjack from './blackjack/Blackjack';
import Slots from './slots/Slots';
import Roulette from './roulette/Roulette';

const GamesContainer = () => {
  let path = window.location.pathname.slice(7);
  console.log(path);

  const renderGame = (path) => {
    switch (path) {
      case "craps":
        return <Craps />
      case "blackjack":
        return <Blackjack />
      case "slots":
        return <Slots />
      case "roulette":
        return <Roulette />
    };
  };

  return (
    <Container className="pt-3">
      <h3>GamesContainer component</h3>
      {renderGame(path)}
      <LobbyChat />
    </Container>

  );
};

export default GamesContainer;