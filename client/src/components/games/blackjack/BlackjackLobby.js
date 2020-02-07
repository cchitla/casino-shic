import React, { useState, useEffect } from 'react';
import NewTable from './NewTable/NewTable';
import CurrentTables from './CurrentTables/CurrentTables';
import './Blackjack.css';
import ScrollToBottom from 'react-scroll-to-bottom';

import io from 'socket.io-client';

let socket;

//props: user(from auth0), 
const BlackjackLobby = (props) => {
  const [tables, setTables] = useState(null);
  const [newTableName, setNewTableName] = useState(null);

  useEffect(() => {
    // let ENDPOINT = "localhost:3001";
    let ENDPOINT = "https://casino-shic.herokuapp.com/";
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
      console.log("user has submitted a new table", newTableName)
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
    <div className="blackjack">Welcome to blackjack main lobby. Create a new blackjack table or join an existing table.
      <NewTable addNewTable={addNewTable} newTableName={newTableName} user={props.user} />
      <p>Here are the current tables:</p>
      <ScrollToBottom className="availableBlackjackTables">
        <CurrentTables tables={tables} />
      </ScrollToBottom>
    </div>
  );
};

export default BlackjackLobby;