import React from 'react';
import { Container } from 'react-bootstrap';
import TopRow from './rows/TopRow';
import LobbyChat from '../chat/LobbyChat';
import { useAuth0 } from "../auth/auth0/Auth0";

const Body = () => {
  const { isAuthenticated, loading, profile } = useAuth0();
  
  if (loading) return <div></div>;

  return (
    <Container className="pt-3">
      <TopRow />
      {(isAuthenticated && profile) ? <LobbyChat profile={profile}/> : null}
    </Container>
  );
};

export default Body;