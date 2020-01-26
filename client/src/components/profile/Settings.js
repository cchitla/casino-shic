import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Settings = (props) => {
  return (
    <Container className="pt-3">
      <Row className="text-center">
        <Col className="m-2 p-3">
          <h1>This is Settings page!</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;