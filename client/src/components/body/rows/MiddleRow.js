import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './RowStyles.css';

const MiddleRow = () => {
  return (
    <Row className="text-center">
      <Col className="m-2"><Image src="http://placekitten.com/600/300" fluid rounded ></Image></Col>
      <Col className="m-2 p-3">
        <div className="neon">Casino</div>
        <div className="shic">S.H.I.C</div>
      </Col>
      <Col className="m-2"><Image src="http://placekitten.com/600/300" fluid rounded ></Image></Col>
    </Row>
  );
};

export default MiddleRow;