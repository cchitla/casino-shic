import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './RowStyles.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../auth/auth0/Auth0";


const TopRow = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <Row className="text-center m-0 justify-content-center pt-5">
      <Col sm={3}><Link to="/games/craps"><Image src="/resources/craps_logo.png" fluid  ></Image></Link></Col>
      <Col sm={3}><Link to="/games/roulette"><Image src="/resources/roulette_logo.png" fluid  ></Image></Link></Col>
      <Col sm={3}><Link to="/games/slots"><Image src="/resources/slots_logo.png" fluid  ></Image></Link></Col>
      <Col sm={3}><Link to="/games/blackjack"><Image src="/resources/blackjack_logo.png" fluid  ></Image></Link></Col>
    </Row>
    );
  };

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