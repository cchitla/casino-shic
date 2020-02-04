import React from 'react';
import { Container, Row, Col, Card, CardGroup, Table } from 'react-bootstrap';
import './Ranking.css';
import { useAuth0 } from '../auth/auth0/Auth0';
import { GiDiamonds } from 'react-icons/gi';

const Ranking = (props) => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h3 className="mt-4 title">Ranking</h3>
              <div className="divider divider-center divider-linear-gradient w-50 mx-auto">
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
              <Card className="ranking-cols">
                <Card.Header><h5 className="ranking-caths">Roulette</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  
                    <Table className="bordered">
                      <thead className="thead-gold">
                        <tr>
                          <th>Username</th>
                          <th>Wins</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>Hanna</td>
                          <td>18</td>
                        </tr>
                        <tr>
                          <td>Malimell</td>
                          <td>8</td>
                        </tr>
                      </tbody>
                    </Table>
                  
                </Card.Body>
                <Card.Footer className="text-muted">Footer! do we need any more info here?</Card.Footer>
              </Card>
              <Card className="ranking-cols">
                <Card.Header><h5 className="ranking-caths">Slots</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  
                    <Table className="bordered">
                    <thead className="thead-gold">
                        <tr>
                          <th>Username</th>
                          <th>Wins</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Saul</td>
                          <td>10</td>
                        </tr>
                        <tr>
                          <td>Hanna</td>
                          <td>8</td>
                        </tr>
                      </tbody>
                    </Table>
                  
                </Card.Body>
                <Card.Footer className="text-muted">Footer! do we need any more info here?</Card.Footer>
              </Card>
              <Card className="ranking-cols">
                <Card.Header><h5 className="ranking-caths">Black Jack</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  
                    <Table className="bordered">
                    <thead className="thead-gold">
                        <tr>
                          <th>Username</th>
                          <th>Wins</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Hanna</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>Malimell</td>
                          <td>2</td>
                        </tr>
                      </tbody>
                    </Table>
                  
                </Card.Body>
                <Card.Footer className="text-muted">Footer! do we need any more info here?</Card.Footer>
              </Card>
              <Card className="ranking-cols">
                <Card.Header><h5 className="ranking-caths">Craps</h5></Card.Header>
                <div className="small-divider "></div>
                <Card.Body>
                  
                    <Table className="bordered">
                    <thead className="thead-gold">
                        <tr>
                          <th>Username</th>
                          <th>Wins</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Chris</td>
                          <td>12</td>
                        </tr>
                        <tr>
                          <td>Saul</td>
                          <td>8</td>
                        </tr>
                      </tbody>
                    </Table>
                  
                </Card.Body>
                <Card.Footer className="text-muted">Footer! do we need any more info here?</Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>


    </React.Fragment>

  );
}

export default Ranking;