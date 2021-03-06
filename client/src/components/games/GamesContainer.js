import React from 'react';
import { Container } from 'react-bootstrap';
import LobbyChat from '../chat/LobbyChat';
import Craps from './craps/Craps';
import BlackjackLobby from './blackjack/BlackjackLobby';
import Slots from './slots/Slots';
import Roulette from './roulette/Roulette';
import { useAuth0 } from "../auth/auth0/Auth0";

import BlackjackTable from './blackjack/BlackjackTable/BlackjackTable';
import BlackjackTableClass from './blackjack/BlackjackTable/BlackjackTableClass';

const GamesContainer = (props) => {
  const { isAuthenticated, loading, user, profile } = useAuth0();

  // pull user DB info (money/chips) and send to game as prop

  if (loading && !profile) {
    return <div></div>;
  };

  let URL = window.location.pathname;
  if (URL.includes("blackjack/tables") && profile) {
    let tableName = decodeURI(window.location.search).replace(/\?/, "")
    return (
      <Container className="p-0">
        <BlackjackTable user={user} profile={profile} tableName={tableName} />
        <LobbyChat game={"blackjack"} tableName={tableName} profile={profile} user={user}/>
      </Container>
    )
  };

  let path = window.location.pathname.slice(7);

  const renderGameSelect = (path) => {
    switch (path) {
      case "craps":
        return <Craps user={user} />
      case "blackjack":
        return <BlackjackLobby user={user} />
      case "slots":
        return <Slots user={user} />
      case "roulette":
        return <Roulette user={user} />
      default:
        return null;
    };
  };

  return (
    <Container className="p-0">
     {/*  <h3>GamesContainer component</h3> */}
      {renderGameSelect(path)}
      {(isAuthenticated && profile) ? <LobbyChat profile={profile} /> : ""}
    </Container>

  );
};

export default GamesContainer;