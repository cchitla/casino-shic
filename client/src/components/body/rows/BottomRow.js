import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ChatWindow from '../../chatrow/chat/Chatwindow';
import ChatRoom from '../../chatrow/chatrooms/Chatrooms';
import Friends from '../../chatrow/friends/Friends';

const BottomRow = () => {
  return (
    <Row className="text-center pt-5">
      <Col className="p-2" sm={6}>
        <ChatWindow />
      </Col>
      <Col className="p-2" sm={3}>
        <ChatRoom />
      </Col>
      <Col className="p-2" sm={3}>
        <Friends />
      </Col>
    </Row>
  );
};

export default BottomRow;