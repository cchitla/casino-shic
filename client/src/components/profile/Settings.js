import React from 'react';
import { Container, Row, Col, ListGroup, Card, CardGroup, Image } from 'react-bootstrap';
import './Profile.css';
import { useAuth0 } from '../auth/auth0/Auth0';
import { GiDiamonds } from 'react-icons/gi';

const Settings = (props) => {
  const { loading, user, isAuthenticated } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h3 className="mt-4 title">User ranking</h3>
              <div class="divider divider-center divider-linear-gradient w-50 mx-auto">
                <GiDiamonds className="diamond-icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pt-4">
        <Row className="text-light-gold">
          <Col md={12}>
            <CardGroup>
              <Card className="profile-cols">
                <Card.Header><h5 className="profile-caths">Roulette</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  <Card.Text>
                    <ListGroup horizontal>
                      <ListGroup.Item>Total</ListGroup.Item>
                      <ListGroup.Item>Wins</ListGroup.Item>
                      <ListGroup.Item>Losses</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block rounded-0" type="submit">Edit</button></Card.Footer>
              </Card>
              <Card className="profile-cols">
                <Card.Header><h5 className="profile-caths">Slots</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  <Card.Text>
                    <ListGroup horizontal>
                      <ListGroup.Item>Total</ListGroup.Item>
                      <ListGroup.Item>Wins</ListGroup.Item>
                      <ListGroup.Item>Losses</ListGroup.Item>
                    </ListGroup>

                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block rounded-0" type="submit">Edit</button></Card.Footer>
              </Card>
              <Card className="profile-cols">
                <Card.Header><h5 className="profile-caths">Black Jack</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  <Card.Text>
                    <ListGroup horizontal>
                      <ListGroup.Item>Total</ListGroup.Item>
                      <ListGroup.Item>Wins</ListGroup.Item>
                      <ListGroup.Item>Losses</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block rounded-0" type="submit">Edit</button></Card.Footer>
              </Card>
              <Card className="profile-cols">
                <Card.Header><h5 className="profile-caths">Craps</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  <Card.Text>
                    <ListGroup horizontal>
                      <ListGroup.Item>Total</ListGroup.Item>
                      <ListGroup.Item>Wins</ListGroup.Item>
                      <ListGroup.Item>Losses</ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block rounded-0" type="submit">Edit</button></Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>


    </React.Fragment>

  );
}

export default Settings;