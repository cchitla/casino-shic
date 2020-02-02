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
                <Card.Header><h5 className="profile-caths">Avatar</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  <Card.Text>
                    <Image thumbnail src={user.picture} alt={user.given_name} />
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block rounded-0" type="submit">Edit</button></Card.Footer>
              </Card>
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
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block rounded-0" type="submit">Edit</button></Card.Footer>
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
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block rounded-0" type="submit">Edit</button></Card.Footer>
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
                <Card.Footer className="text-muted"><button className="custom-btn  btn btn-block rounded-0" type="submit">Edit</button></Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </React.Fragment>

  );
}

export default Profile;