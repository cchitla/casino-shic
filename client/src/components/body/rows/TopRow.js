import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const TopRow = () => {
  return (
    <Row className="text-center my-2">
      <Col>
        <div className="neon">Casino</div>
        <div className="shic">S.H.I.C</div>
      </Col>
    </Row>
  );
};

export default TopRow;