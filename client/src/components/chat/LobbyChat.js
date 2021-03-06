import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import io from 'socket.io-client';
import './Chat.css';
import API from '../../utils/API';

import Messages from './Messages/Messages';
import Input from './Input/Input';
import OnlineUsers from './OnlineUsers/OnlineUsers';

let socket;

const LobbyChat = (props) => {
  const [name, setName] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState("");

  let socketPath = window.location.pathname.slice(7);
  let room = "lobby";
  if (props.tableName) {
    room = `${props.game} tableChat ${props.tableName}`
  } else if (socketPath !== "") {
    room = socketPath;
  };

  //this useEffect only handles new connections
  useEffect(() => {
    API
      .getOnePlayer(props.profile.email)
      .then(res => setName(res.data.username));

    //  let ENDPOINT = "localhost:3001";
    // let ENDPOINT = "https://fast-temple-06709.herokuapp.com/";
    let ENDPOINT = "https://casino-shic.herokuapp.com/";
    // let ENDPOINT = "https://gentle-forest-68567.herokuapp.com/";
    socket = io(ENDPOINT);

    return () => {
      socket.emit("disconnect chat");
      socket.off();
    };
  }, []);

  useEffect(() => {
    if (name) {
      socket.emit("join", { name, room }, () => {
      });
    };
  }, [name]);

  useEffect(() => {
    socket.on("message", (message) => {
      // console.log("received message", message)
      setMessages([...messages, message]);
      });
    socket.on('roomData', ({ users }) => setConnectedUsers(users));
  }, [messages, connectedUsers]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) socket.emit("sendMessage", {message, length: messages.length}, () => setMessage(""));
    // if (message) socket.emit("sendMessage", message, () => setMessage(""));
  };

  return (
    <Row className="chat-wrapper rounded pt-1">
      <Col className="p-0 pr-1" style={{ minHeight: "200px" }} sm={8}>
        <Messages messages={messages} name={name} profile={props.profile}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Col>
      <Col className="p-0 pl-1" style={{ minHeight: "200px" }} sm={4}>
        <OnlineUsers connectedUsers={connectedUsers} profile={props.profile}/>
      </Col>
    </Row>
  );
};

export default LobbyChat;
