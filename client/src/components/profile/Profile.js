import React from 'react';
import { Container, Row, Col, ListGroup, Card, CardGroup, Image } from 'react-bootstrap';
import './Profile.css';
import { useAuth0 } from '../auth/auth0/Auth0';
import { GiDiamonds } from 'react-icons/gi';


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
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h3 className="mt-4 title">Profile</h3>
              <div class="divider w-100 mx-auto ">
                <GiDiamonds className="diamond-icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pt-4">
        <Row className="text-light-gold">
          <Col md={3}>
            <Image thumbnail src={user.picture} alt={user.given_name} />
            <button className="my-3 custom-btn">Change picture</button>
          </Col>
          <Col md={9}>
            <CardGroup>
              <Card className="profile-cols">
                <Card.Header><h5 className="profile-caths">Profile</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  <Card.Text>
                    <ul className="list-unstyled">
                      <li>First name: <b>{user.given_name}</b></li>
                      <li>Last name: <b>{user.family_name}</b></li>
                      <li>Birthday: <b>October 30 1977</b></li>
                      <li>Gender: <b>Femle</b></li>
                    </ul>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block" type="submit">Edit</button></Card.Footer>
              </Card>
              <Card className="profile-cols">
                <Card.Header><h5 className="profile-caths">Interests</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  <Card.Text>
                    <ul className="list-unstyled">
                      <li>Headbanging</li>
                      <li>Heavy Metal</li>
                      <li>Cats</li>
                      <li>Coding</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block" type="submit">Edit</button></Card.Footer>
              </Card>
              <Card className="profile-cols">
                <Card.Header><h5 className="profile-caths">Some other cool shit</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  <Card.Text>
                    <ul className="list-unstyled">
                      <li>List of latest chant logs?</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block" type="submit">Edit</button></Card.Footer>
              </Card>
            </CardGroup>
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