import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useAuth0 } from "../auth/auth0/Auth0";
import io from 'socket.io-client';

import Messages from './Messages/Messages';
import Input from './Input/Input';

let socket;

const LobbyChat = () => {
  const [name, setName] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState("");

  const ENDPOINT = "localhost:3001";

  const room = "Lobby"

  //this useEffect only handles new connections
  useEffect(() => {
    socket = io(ENDPOINT);

    setName(user.name);

    // return replaces component unmount
    return () => {
      socket.emit("disconnect");
      socket.off();
    };

  }, []);

  useEffect(() => {
    if (name) {
      socket.emit("join", { name, room }, () => {
      });
    };

    console.log("username", name);
  }, [name]);

  // this useEffect handles incoming messages
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setConnectedUsers(users);
    })

  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) socket.emit("sendMessage", message, () => setMessage(""));
  };

  const { loading, user } = useAuth0();

  if (loading) {
    return <div></div>;
  } 


  return (
    <Row className="text-center">
      <Col className="p-2 bg-light text-primary" style={{ minHeight: "200px" }} sm={8}>
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Col>
      <Col className="p-2 bg-secondary text-light" style={{ minHeight: "200px" }} sm={4}>
        Friends List
      </Col>

    </Row>
  );
};

export default LobbyChat;