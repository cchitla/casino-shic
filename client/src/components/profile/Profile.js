import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth0 } from '../auth/auth0/Auth0';

const Profile = (props) => {
  const { loading, user, isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect({})
  };

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="pt-3">
      <Row className="text-center">
        <Col className="m-2 p-3">
          <h1>This is Profile page!</h1>

          <img src={user.picture} alt="Profile" />

          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <code>{JSON.stringify(user, null, 2)}</code>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;