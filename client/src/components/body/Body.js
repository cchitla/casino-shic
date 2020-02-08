import React from 'react';
import { Container } from 'react-bootstrap';
import TopRow from './rows/TopRow';
import LobbyChat from '../chat/LobbyChat';
import API from '../../utils/API';


import { useAuth0 } from "../auth/auth0/Auth0";

const Body = () => {
  const { isAuthenticated, loading, user } = useAuth0();

  if (loading) return <div></div>;

  const createDbPlayer = () => {
    API.createPlayer({
      email: user.email,
      username: user.nickname,
      isOnline: true
    });
  };

  if (isAuthenticated) {
    API.getOnePlayer(user.email)
      .then(function(returnedUser) {
        if (!returnedUser.data) {
          console.log("no user returned, creating user in db");
          createDbPlayer();
        };
        console.log("existing DB user found: ", returnedUser.data);
      });
  };

  return (
    <Container className="pt-3">
      <TopRow />
      { isAuthenticated ? <LobbyChat /> : null }
    </Container>
  );
};

export default Body;