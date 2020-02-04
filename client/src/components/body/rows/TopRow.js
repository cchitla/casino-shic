import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './RowStyles.css';
import { Link } from 'react-router-dom';

const TopRow = () => {
  return (
    <Row className="text-center m-0 justify-content-center pt-5">
      <Col sm={3}><Link to="/games/craps"><Image src="/resources/craps_logo.png" fluid  ></Image></Link></Col>
      <Col sm={3}><Link to="/games/roulette"><Image src="/resources/roulette_logo.png" fluid  ></Image></Link></Col>
      <Col sm={3}><Link to="/games/slots"><Image src="/resources/slots_logo.png" fluid  ></Image></Link></Col>
      <Col sm={3}><Link to="/games/blackjack"><Image src="/resources/blackjack_logo.png" fluid  ></Image></Link></Col>
    </Row>
  );
};

export default TopRow;