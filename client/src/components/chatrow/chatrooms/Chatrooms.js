import React from 'react';
import './Chatrooms.css';
import { Card } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

//calling this from body/BottomRows.js
//@Cris this are the styles for your elements, apply them to real chat
const ChatRoom = () => {
  return (
    <div className="rooms">
      <Card className="rooms-card">
      <Card.Header>Rooms</Card.Header>
      <Scrollbars style={{ height: 275, backgroundColor: "#f1c876" }}>
      <Card.Body>
        <ul className="list-unstyled chat-list">
          <li>General</li>
          <li>Blackjack</li>
          <li>Slots</li>
          <li>Roulette</li>
          <li>Craps</li>
        </ul>
      </Card.Body>
      </Scrollbars>
    </Card>
    </div>
    
  );
};

export default ChatRoom;