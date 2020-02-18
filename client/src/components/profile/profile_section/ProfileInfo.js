import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const ProfileInfo = (props) => {
  return (
    <Row>
      <Col>

        <table className="table" style={{ minHeight: 290 }}>
          <tbody>
            <tr>
              <td className="col-black" colSpan={2}>
                <Row noGutters>
                  <Col sm={4} className="text-right text-gold">First name:</Col>
                  <Col sm={8} className="text-left pl-2">{props.firstName}</Col>
                </Row>
                <Row noGutters>
                  <Col><div className="small-divider my-2"></div></Col>
                </Row>
                <Row noGutters>
                  <Col sm={4} className="text-right text-gold">Last name:</Col>
                  <Col sm={8} className="text-left pl-2">{props.lastName}</Col>
                </Row>
                <Row noGutters>
                  <Col><div className="small-divider my-2"></div></Col>
                </Row>
                <Row noGutters>
                  <Col sm={4} className="text-right text-gold">Sign:</Col>
                  <Col sm={8} className="text-left pl-2">{props.sign}</Col>
                </Row>
                <Row noGutters>
                  <Col><div className="small-divider my-2"></div></Col>
                </Row>
                <Row noGutters>
                  <Col sm={4} className="text-right text-gold">Gender:</Col>
                  <Col sm={8} className="text-left pl-2">{props.gender}</Col>
                </Row>
                <Row noGutters>
                  <Col><div className="small-divider my-2"></div></Col>
                </Row>
                <Row noGutters>
                  <Col sm={4} className="text-right text-gold">Email:</Col>
                  <Col sm={8} className="text-left pl-2">{props.user.email}</Col>
                </Row>
              </td>
            </tr>
           
          </tbody>
        </table>
      </Col>
    </Row>
  );
}

export default ProfileInfo;

