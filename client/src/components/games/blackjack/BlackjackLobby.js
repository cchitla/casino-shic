import React, { useState, useEffect } from 'react';
import NewTable from './NewTable/NewTable';
import CurrentTables from './CurrentTables/CurrentTables';
import './Blackjack.css';
import ScrollToBottom from 'react-scroll-to-bottom';

import io from 'socket.io-client';

let socket;

let openTables = ["Big table", "Small table"];

//props: user(from auth0), 
const BlackjackLobby = (props) => {
  const [tables, setTables] = useState(null);
  const [newTableName, setNewTableName] = useState(null);

  useEffect(() => {
    // get this from... socket
    setTables(openTables);
  }, [])

  useEffect(() => {
    if (newTableName) {
      //run functions to add table
      console.log("user has submitted a new table", newTableName)
    }

  }, [newTableName]);


  const addNewTable = (newTableName) => {
    setNewTableName(newTableName);
    //push just for develop - until socket is setup
    tables.push(newTableName);

    // send table info to server with socket.io
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