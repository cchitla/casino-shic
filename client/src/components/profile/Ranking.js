import React from 'react';
import { Container, Row, Col, Card, CardGroup, Table } from 'react-bootstrap';
import './Profile.css';
import { GiDiamonds } from 'react-icons/gi';
import API from '../../utils/API'
import { useAuth0 } from '../auth/auth0/Auth0';

class Settings extends React.Component {

  state = {
    rouletteWins: "",
    rouletteTotal: "",
    crapsWins: "",
    crapsTotal: "",
    bjWins: "",
    bjTotal: "",
    slotsWins: "",
    slotsTotal: ""
  }

  componentDidMount() {
    API.getOnePlayer(this.props.user.email)
      .then(res => {
        console.log(res.data);
        this.setState({
          rouletteWins: res.data.wins.roulette.wins,
          rouletteTotal: res.data.wins.roulette.totalGames,
          crapsWins: res.data.wins.craps.wins,
          crapsTotal: res.data.wins.craps.totalGames,
          bjWins: res.data.wins.blackJack.wins,
          bjTotal: res.data.wins.blackJack.totalGames,
          slotsWins: res.data.wins.slots.wins,
          slotsTotal: res.data.wins.slots.totalGames,
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <div className="text-center">
                <h3 className="mt-4 pages-title">User ranking</h3>
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
                      <Table className="bordered">
                        <thead className="thead-gold">
                          <tr>
                            <th>Total</th>
                            <th>Wins</th>
                            <th>Losses</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.state.rouletteTotal}</td>
                            <td>{this.state.rouletteWins}</td>
                            <td>{this.state.rouletteTotal - this.state.rouletteWins}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="profile-cols">
                  <Card.Header><h5 className="profile-caths">Slots</h5></Card.Header>
                  <div className="small-divider "></div>
                  <Card.Body>
                    <Card.Text>
                      <Table className="bordered">
                        <thead className="thead-gold">
                          <tr>
                            <th>Total</th>
                            <th>Wins</th>
                            <th>Losses</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.state.slotsTotal}</td>
                            <td>{this.state.slotsWins}</td>
                            <td>{this.state.slotsTotal - this.state.slotsWins}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="profile-cols">
                  <Card.Header><h5 className="profile-caths">Black Jack</h5></Card.Header>
                  <div className="small-divider "></div>
                  <Card.Body>
                    <Card.Text>
                      <Table className="bordered">
                        <thead className="thead-gold">
                          <tr>
                            <th>Total</th>
                            <th>Wins</th>
                            <th>Losses</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.state.bjTotal}</td>
                            <td>{this.state.bjWins}</td>
                            <td>{this.state.bjTotal - this.state.bjWins}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="profile-cols">
                  <Card.Header><h5 className="profile-caths">Craps</h5></Card.Header>
                  <div className="small-divider "></div>
                  <Card.Body>
                    <Card.Text>
                      <Table className="bordered">
                        <thead className="thead-gold">
                          <tr>
                            <th>Total</th>
                            <th>Wins</th>
                            <th>Losses</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.state.crapsTotal}</td>
                            <td>{this.state.crapsWins}</td>
                            <td>{this.state.crapsTotal - this.state.crapsWins}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>


      </React.Fragment>

    );
  }

}

export default Settings;