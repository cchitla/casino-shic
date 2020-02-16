import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const ProfileInfo = (props) => {
  return (
    <React.Fragment>
    <Row>
      <Col>
        <table className="bordered table" style={{minHeight: 260}}>
          <tbody>
            <tr>
              <td className="col-gold" width="40%">First name:</td>
              <td className="col-black">{props.firstName}</td>
            </tr>
            <tr>
              <td className="col-gold" width="40%">Last name:</td>
              <td className="col-black">{props.lastName}</td>
            </tr>
            <tr>
              <td className="col-gold" width="40%">Sign:</td>
              <td className="col-black">{props.sign}</td>
            </tr>
            <tr>
              <td className="col-gold" width="40%">Gender:</td>
              <td className="col-black">{props.gender}</td>
            </tr>
            <tr>
              <td className="col-gold" width="40%">Email:</td>
              <td className="col-black">{props.user.email}</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  </React.Fragment>
    /* <ul className="list-unstyled">
      <li>First name: <span className="text-light-gold">{props.firstName}</span></li>
      <li>Last name: <span className="text-light-gold">{props.lastName}</span></li>
      <li>Sign: <span className="text-light-gold">{props.sign}</span></li>
      <li>Gender: <span className="text-light-gold">{props.gender}</span></li>
      <li>Email: <span className="text-light-gold">{props.user.email}</span></li>
    </ul> */
  );
}

export default ProfileInfo;

