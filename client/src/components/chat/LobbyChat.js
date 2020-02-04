import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useAuth0 } from "../auth/auth0/Auth0";
import io from 'socket.io-client';
import './Chat.css';

import Messages from './Messages/Messages';
import Input from './Input/Input';
import OnlineUsers from './OnlineUsers/OnlineUsers';

let socket;

const LobbyChat = () => {
  const [name, setName] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState("");
  
  let socketPath = window.location.pathname.slice(7);
  let room = "Lobby";
  if (socketPath !== ""){
    room = socketPath;
  };
  console.log("room = ", room);
  
  //this useEffect only handles new connections
  useEffect(() => {
    let ENDPOINT = "localhost:3001";


    socket = io(ENDPOINT);

    setName(user.name);

    // return replaces component will unmount
    // return disconnectUser();
    return () => {
      socket.emit("disconnect");
      socket.off();
    };

  }, []);

  // const disconnectUser = () => {
  //   if (name) {
  //   socket.emit("disconnect");
  //   console.log("emitted disconnect message");
  //   socket.off();
  //   console.log("turned socket off");
  //   }
  // }

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
  };

  return (
    <Row className="chat-wrapper pt-5">
      <Col className="p-0 pr-1" style={{ minHeight: "200px" }} sm={8}>
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Col>
      <Col className="p-0 pl-1" style={{ minHeight: "200px" }} sm={4}>
        <OnlineUsers connectedUsers={connectedUsers} />
      </Col>
    </Row>
  );
};

export default LobbyChat;
