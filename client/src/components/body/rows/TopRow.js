import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './RowStyles.css';

const TopRow = () => {
  return (
    <Row className="text-center m-0 justify-content-center pt-5">
      <Col sm={3}><Image src="/resources/craps_logo.png" fluid  ></Image></Col>
      <Col sm={3}><Image src="/resources/roulette_logo.png" fluid  ></Image></Col>
      <Col sm={3}><Image src="/resources/slots_logo.png" fluid  ></Image></Col>
      <Col sm={3}><Image src="/resources/blackjack_logo.png" fluid  ></Image></Col>
    </Row>
  );
};

export default TopRow;