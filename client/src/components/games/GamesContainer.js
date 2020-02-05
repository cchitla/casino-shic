import React from 'react';
import { Container } from 'react-bootstrap';
import LobbyChat from '../chat/LobbyChat';
import Craps from './craps/Craps';
import Blackjack from './blackjack/Blackjack';
import Slots from './slots/Slots';
import Roulette from './roulette/Roulette';
import { useAuth0 } from "../auth/auth0/Auth0";

const GamesContainer = (props) => {
  const { isAuthenticated, loading, user } = useAuth0();

  if (loading) {
    return <div></div>;
  };

  let path = window.location.pathname.slice(7);  

  const renderGame = (path) => {
    switch (path) {
      case "craps":
        return <Craps />
      case "blackjack":
        return <Blackjack user={user}/>
      case "slots":
        return <Slots />
      case "roulette":
        return <Roulette />
      default:
        return null;
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