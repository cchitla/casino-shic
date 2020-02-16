import React, { useState, useEffect } from 'react';
import NewTable from './NewTable/NewTable';
import CurrentTables from './CurrentTables/CurrentTables';
import './Blackjack.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import io from 'socket.io-client';

let socket;

//props: user(from auth0), 
const BlackjackLobby = (props) => {
  const [tables, setTables] = useState(null);
  const [newTableName, setNewTableName] = useState(null);


  useEffect(() => {
    // let ENDPOINT = "localhost:3001";
    // let ENDPOINT = "https://fast-temple-06709.herokuapp.com/";
    let ENDPOINT = "https://casino-shic.herokuapp.com/";
    // let ENDPOINT = "https://gentle-forest-68567.herokuapp.com/";
    socket = io(ENDPOINT);
    socket.emit("retrieve blackjack tables");

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [])

  useEffect(() => {
    if (newTableName) {
      socket.emit("new blackjack table", newTableName)
      socket.emit("retrieve blackjack tables");
    };

  }, [newTableName]);

  useEffect(() => {
    socket.on("send blackjack tables", (tables) => {
      setTables(tables);
    });
  });

  const addNewTable = (newTableName) => {
    setNewTableName(newTableName);
  };

  return (
    <Row className="my-3">
      <Col>
        <div className="blackjack">
          <p>Welcome to blackjack main lobby. Create a new blackjack table or join an existing table.</p>
          <NewTable addNewTable={addNewTable} newTableName={newTableName} user={props.user} />
          <p>Available tables:</p>
          <ScrollToBottom className="availableBlackjackTables">
            <CurrentTables tables={tables} />
          </ScrollToBottom>
        </div>
      </Col>
    </Row>
  );
};

export default BlackjackLobby;