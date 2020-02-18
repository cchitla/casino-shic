import React from 'react';
import { Container, Row, Col, Card, CardGroup, Table } from 'react-bootstrap';
import './Ranking.css';
import { useAuth0 } from '../auth/auth0/Auth0';
import { GiDiamonds } from 'react-icons/gi';
import API from '../../utils/API';
import PageTitle from '../page_titles/Title';


class Ranking extends React.Component {

  state = {
    dataRoulette: [],
    dataSlots: [],
    dataBJ: [],
    dataCraps: []
  }


  componentDidMount() {
    API.getTopRoulette()
      .then(res => {
        console.log(res.data);
        this.setState({ dataRoulette: res.data })
      })
      .catch(err => console.log(err));

    API.getTopSlots()
      .then(res => {
        console.log(res.data);
        this.setState({ dataSlots: res.data })
      })
      .catch(err => console.log(err));

    API.getTopBlackJack()
    .then(res => {
      console.log(res.data);
      this.setState({ dataBJ: res.data })
    })
    .catch(err => console.log(err));

    API.getTopCraps()
    .then(res => {
      console.log(res.data);
      this.setState({ dataCraps: res.data })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <PageTitle title="Ranking" />
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
                          <td>
                            <ul className="list-unstyled">
                              {this.state.dataRoulette.map(item =>
                                <li>
                                  {item.username}
                                  <div className="small-divider my-2"></div>
                                </li>)}

                            </ul>
                          </td>
                          <td><ul className="list-unstyled">
                            {this.state.dataRoulette.map(item =>
                              <li>
                                {item.wins.roulette.wins}
                                <div className="small-divider my-2"></div>
                              </li>)}
                          </ul>
                          </td>
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
                          <td>
                            <ul className="list-unstyled">
                              {this.state.dataSlots.map(item =>
                                <li className="bottom-li">
                                  {item.username}
                                  <div className="small-divider my-2"></div>
                                </li>)}

                            </ul>
                          </td>
                          <td><ul className="list-unstyled">
                            {this.state.dataSlots.map(item =>
                              <li>
                                {item.wins.slots.wins}
                                <div className="small-divider my-2"></div>
                              </li>)}
                          </ul>
                          </td>
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
                          <td>
                            <ul className="list-unstyled">
                              {this.state.dataBJ.map(item =>
                                <li>
                                  {item.username}
                                  <div className="small-divider my-2"></div>
                                </li>)}

                            </ul>
                          </td>
                          <td><ul className="list-unstyled">
                            {this.state.dataBJ.map(item =>
                              <li>
                                {item.wins.roulette.wins}
                                <div className="small-divider my-2"></div>
                              </li>)}
                          </ul>
                          </td>
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
                          <td>
                            <ul className="list-unstyled">
                              {this.state.dataCraps.map(item =>
                                <li>
                                  {item.username}
                                  <div className="small-divider my-2"></div>
                                </li>)}

                            </ul>
                          </td>
                          <td><ul className="list-unstyled">
                            {this.state.dataCraps.map(item =>
                              <li>
                                {item.wins.roulette.wins}
                                <div className="small-divider my-2"></div>
                              </li>)}
                          </ul>
                          </td>
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

}

export default Ranking;