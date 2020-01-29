import React from 'react';
import { Container } from 'react-bootstrap';
import TopRow from './rows/TopRow';
import MiddleRow from './rows/MiddleRow';
import BottomRow from './rows/BottomRow';

import { useAuth0 } from "../auth/auth0/Auth0";

const Body = () => {
  const { isAuthenticated, loading, user } = useAuth0();

  // TODO - make this async to render body component without waiting
  // this needs to be here... otherwise cannot read property of 'name' - undefined error occurs when reading user.name below
  if (loading) {
    return <div></div>;
  }

  return (
    <Container className="pt-3">
        {isAuthenticated ? <p>Welcome, {user.name} </p> : ""}
        <TopRow />
        <MiddleRow />
        <BottomRow />
    </Container>
  );
};

export default Body;