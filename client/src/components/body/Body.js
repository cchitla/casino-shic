import React from 'react';
import { Container } from 'react-bootstrap';
import TopRow from './rows/TopRow';
import MiddleRow from './rows/MiddleRow';
import LobbyChat from '../chat/LobbyChat';

import { useAuth0 } from "../auth/auth0/Auth0";

const Body = () => {
  const { isAuthenticated, loading, user } = useAuth0();

  if (loading) {
    return <div></div>;
  }

  return (
    <Container className="pt-3">
        <TopRow />
        <MiddleRow />
        {isAuthenticated ? <LobbyChat /> : null}
    </Container>
  );
};

export default Body;