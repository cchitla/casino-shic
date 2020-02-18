import React from 'react';
import API from '../../../utils/API';
import '../Profile.css';
import { Row, Col, Table } from 'react-bootstrap';


class InterestsInfo extends React.Component {

  state = {
    sports: {},
    hobbies: {}
  }

  componentDidMount() {
    //grab user data from database and set state with that data
    API.getOnePlayer(this.props.user.email)
      .then(res => {
        this.setState({
          sports: res.data.interests[0]["sports"],
          hobbies: res.data.interests[0]["hobbies"]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Table className="bordered" style={{ minHeight: 290 }}>
              <thead className="thead-gold">
                <tr>
                  <th>Sports</th>
                  <th>Hobbies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul className="list-unstyled">
                      {
                        this.state.sports ?
                          Object.keys(this.state.sports).map((item, i) => (
                            <li key={i}>
                              {this.state.sports[item].value}
                              <div className="small-divider my-2"></div>
                            </li>
                          ))
                          :
                          null
                      }
                    </ul>
                  </td>
                  <td>
                    <ul className="list-unstyled">
                      {
                        this.state.hobbies ?
                          Object.keys(this.state.hobbies).map((item, i) => (
                            <li key={i}>
                              {this.state.hobbies[item].value}
                              <div className="small-divider my-2"></div>
                            </li>
                          )) :
                          null
                      }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </Table>

          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default InterestsInfo;

