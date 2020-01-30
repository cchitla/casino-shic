import React from 'react';
import { Container, Row, Col, ListGroup, Form, Button, Image } from 'react-bootstrap';
import './Profile.css';
import { useAuth0 } from '../auth/auth0/Auth0';

const Profile = (props) => {
  const { loading, user, isAuthenticated, loginWithRedirect } = useAuth0();
  if (loading) {
    return <div></div>;
  }
  if (!isAuthenticated) {
    loginWithRedirect({})
  };

  if (loading || !user) {
    return <div>Loading...</div>;
  }
/* { "given_name": "Spiky", "family_name": "Strawberry", "nickname": "spikystrawberry", "name": "Spiky Strawberry", "picture": "https://lh3.googleusercontent.com/a-/AAuE7mA4eP-Puj1cj74bvi5pXvu9ZneuPPeLaQt5CBFr", "locale": "en", "updated_at": "2020-01-30T08:06:21.286Z", "email": "spikystrawberry@gmail.com", "email_verified": true, "sub": "google-oauth2|110718052592656293656" } */
  return (
    <React.Fragment>
        <Container>
          <Row>
            <Col>
              <h3 className="text-left border-bottom mr-5 mt-4">User profile</h3>
            </Col>
          </Row>
        </Container>
        <Container className="pt-4">
          <Row>
            <Col md={3}>
              <Image className="rounded img-fluid" src={user.picture} alt={user.given_name} />
              <Button className="my-2">Change picture</Button>
            </Col>
            <Col md={3}>
            <h5>Profile</h5>
              <ul className="list-unstyled">
                <li>First name: <b>{user.given_name}</b></li>
                <li>Last name: <b>{user.family_name}</b></li>
                <li>Birthday: <b>October 30 1977</b></li>
                <li>Gender: <b>Femle</b></li>
              </ul>
              <hr></hr>
              <Button variant="primary" type="submit">Edit</Button>
            </Col>
            <Col md={3}>
              <h5>Interests</h5>
              <ul className="list-unstyled">
                <li>Headbanging</li>
                <li>Heavy Metal</li>
                <li>Cats</li>
                <li>Coding</li>
              </ul>
              <hr></hr>
              <Button variant="primary" type="submit">Edit</Button>
            </Col>
            <Col md={3}>
              <h5>Some other cool shit</h5>
              <ul className="list-unstyled">
                <li>List of latest chant logs?</li>
              </ul>
              <hr></hr>
              <Button variant="primary" type="submit">Edit</Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h3 className="text-left border-bottom mr-5 my-4">User ranking</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={3}>
              <h3>Roulette</h3>
              <h5>Rating: 1000000</h5>

              <ListGroup horizontal>
                <ListGroup.Item>Total</ListGroup.Item>
                <ListGroup.Item>Wins</ListGroup.Item>
                <ListGroup.Item>Losses</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <h3>Slots</h3>
              <h5>Rating: 1000000</h5>

              <ListGroup horizontal>
                <ListGroup.Item>Total</ListGroup.Item>
                <ListGroup.Item>Wins</ListGroup.Item>
                <ListGroup.Item>Losses</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <h3>Craps</h3>
              <h5>Rating: 1000000</h5>

              <ListGroup horizontal>
                <ListGroup.Item>Total</ListGroup.Item>
                <ListGroup.Item>Wins</ListGroup.Item>
                <ListGroup.Item>Losses</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <h3>Black Jack</h3>
              <h5>Rating: 1000000</h5>
              <ListGroup horizontal>
                <ListGroup.Item>Total</ListGroup.Item>
                <ListGroup.Item>Wins</ListGroup.Item>
                <ListGroup.Item>Losses</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
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
      </React.Fragment>
    
  );
}

export default Profile;