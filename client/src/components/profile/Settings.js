import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth0 } from '../auth/auth0/Auth0';

const Settings = (props) => {
  const { loading, user, isAuthenticated } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="pt-3">
      <Row className="text-center">
        <Col className="m-2 p-3">
          <h1>This is Settings page!</h1>
          <p>Settings for {user.name}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;