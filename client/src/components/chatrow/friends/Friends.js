import React from 'react';
import './Friends.css';
import { Card, Button } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

//calling this from body/BottomRows.js
const Friends = () => {
  return (
    <Card>
      <Card.Header>Friends</Card.Header>
      <Scrollbars style={{ height: 275, backgroundColor: "#f1c876" }}>
      <Card.Body>
        <ul className="list-unstyled chat-list">
          <li><img src="https://placebear.com/18/18" alt="name" className="mr-2 minitar" />Quentine</li>
          <li><img src="https://placebear.com/18/18" alt="name" className="mr-2 minitar" />Alice</li>
          <li><img src="https://placebear.com/18/18" alt="name" className="mr-2 minitar" />Penny</li>
          <li><img src="https://placebear.com/18/18" alt="name" className="mr-2 minitar" />Julia</li>
          <li><img src="https://placebear.com/18/18" alt="name" className="mr-2 minitar" />Kathie</li>
          <li><img src="https://placebear.com/18/18" alt="name" className="mr-2 minitar" />Elliot</li>
          <li><img src="https://placebear.com/18/18" alt="name" className="mr-2 minitar" />Margo</li>
          <li><img src="https://placebear.com/18/18" alt="name" className="mr-2 minitar" />Fen</li>
        </ul>
      </Card.Body>
      </Scrollbars>
     
    </Card>
  );
};

export default Friends;