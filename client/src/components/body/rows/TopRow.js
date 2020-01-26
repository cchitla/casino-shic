import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const TopRow = () => {
  return (
    <Row className="text-center">
      <Col className="m-2">Top row empty space on the right</Col>
      <Col className="m-2"><Image src="http://placekitten.com/600/300" fluid rounded ></Image></Col>
      <Col className="m-2">Top row empty space on the left</Col>
    </Row>
  );
};

export default TopRow;