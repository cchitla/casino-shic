import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopRow from './rows/TopRow';
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
    <Container>
      <Row className="py-2 my-2">
        <Col>
          <TopRow />
          <BottomRow />
        </Col>
      </Row>
    </Container>
  );
};

export default Body;