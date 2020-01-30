import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const BottomRow = () => {
  return (
    <Row className="text-center">
      <Col className="p-2 bg-light text-primary" style={{ minHeight: "200px" }} sm={8}>
        Huge chat window
      </Col>
      <Col className="p-2 bg-secondary text-light" style={{ minHeight: "200px" }} sm={4}>
        Friends List
      </Col>

    </Row>
  );
};

export default BottomRow;