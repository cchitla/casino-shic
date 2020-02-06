import React, { useEffect, useState } from 'react';
import './BlackjackTable.css';

import io from 'socket.io-client';


let socket;

const BlackjackTable = (props) => {
  const [name, setName] = useState(props.user.name)
  const [tableName, setTableName] = useState(null);
  // const { user, tableName} = props;
  const socketRoom = `blackjackTable ${tableName}`
 
  useEffect(() => {
    let ENDPOINT = "localhost:3001";
    socket = io(ENDPOINT);
    console.log(socketRoom);
    setTableName(props.tableName);


  }, [])
  // use table name to connect to that socket instance

  useEffect(() => {
    if (tableName) {
      socket.emit("join table", {name, tableName}, () => {
      });
    };
  }, [tableName]);


  return (
<div className="blackjackTable">Welcome to blackjack at table: {tableName}, player {name}</div>
  )
};

export default BlackjackTable;