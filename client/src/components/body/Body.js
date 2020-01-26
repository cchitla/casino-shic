import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopRow from './rows/TopRow';
import MiddleRow from './rows/MiddleRow';
import BottomRow from './rows/BottomRow';

const Body = () => {
  return (
    <Container className="pt-3">
        <TopRow />
        <MiddleRow />
        <BottomRow />
    </Container>
  );
};

export default Body;