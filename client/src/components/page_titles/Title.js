import React from 'react';
import { Container, Row, Col, Card, CardGroup, Image } from 'react-bootstrap';
import { GiDiamonds } from 'react-icons/gi';
import './Title.css';

const PageTitle = props => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center">
            <h3 className="mt-4 pages-title">{props.title}</h3>
            <div className="divider divider-center divider-linear-gradient w-50 mx-auto">
              <GiDiamonds className="diamond-icon" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PageTitle;

