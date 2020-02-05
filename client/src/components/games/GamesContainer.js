import React from 'react';
import { Container } from 'react-bootstrap';
import LobbyChat from '../chat/LobbyChat';
import Craps from './craps/Craps';
import Blackjack from './blackjack/Blackjack';
import Slots from './slots/Slots';
import Roulette from './roulette/Roulette';
import { useAuth0 } from "../auth/auth0/Auth0";

const GamesContainer = (props) => {
  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <div></div>;
  };

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
      {isAuthenticated ? <LobbyChat /> : ""}
    </Container>

  );
};

export default GamesContainer;