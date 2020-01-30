import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './RowStyles.css';

const MiddleRow = () => {
  return (
    <Row className="text-center my-4">
      <Col className="p-2" sm={3}><Image src="http://placekitten.com/600/300" fluid rounded ></Image></Col>
      <Col className="p-2" sm={3}><Image src="http://placekitten.com/600/300" fluid rounded ></Image></Col>
      <Col className="p-2" sm={3}><Image src="http://placekitten.com/600/300" fluid rounded ></Image></Col>
      <Col className="p-2" sm={3}><Image src="http://placekitten.com/600/300" fluid rounded ></Image></Col>
    </Row>
  );
};

export default MiddleRow;