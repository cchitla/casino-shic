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
      .then(function (dbUser) {
        if (!dbUser.data) {
          console.log("no user returned, creating user in db");
          createDbPlayer();
        };
        if (dbUser) {
          console.log("user from db:", dbUser.data);
          window.sessionStorage.setItem("user", dbUser.data)
        };
      })
  };

  return (
    <Container className="pt-3">
      <TopRow />
      {isAuthenticated ? <LobbyChat /> : null}
    </Container>
  );
};

export default Body;