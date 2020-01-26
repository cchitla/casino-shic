import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const BottomRow = () => {
  return (
    <Row className="text-center">
      <Col className="m-2">Bottom row empty space on the right</Col>
      <Col className="m-2"><Image src="http://placekitten.com/600/300" fluid rounded ></Image></Col>
      <Col className="m-2">Bottom row empty space on the left</Col>
    </Row>
  );
};

export default BottomRow;