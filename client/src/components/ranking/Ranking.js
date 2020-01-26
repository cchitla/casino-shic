import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Ranking = (props) => {
  return (
    <Container className="pt-3">
      <Row className="text-center">
        <Col className="m-2 p-3">
          <h1>This is ranking page!</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Ranking;