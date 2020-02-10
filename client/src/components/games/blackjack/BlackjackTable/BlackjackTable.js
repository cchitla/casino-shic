import React, { useEffect, useState } from 'react';
import './BlackjackTable.css';

import io from 'socket.io-client';


let socket;

const BlackjackTable = (props) => {
  const [name, setName] = useState(props.profile.username);
  const [tableName, setTableName] = useState(null);
  const [players, setPlayers] = useState([]);
  const socketRoom = `blackjackTable ${tableName}`

  useEffect(() => {
    // let ENDPOINT = "localhost:3001";
    let ENDPOINT = "https://casino-shic.herokuapp.com/";
    // let ENDPOINT = "https://gentle-forest-68567.herokuapp.com/";
    socket = io(ENDPOINT);
    setTableName(props.tableName);

    return () => {
      socket.emit("disconnect");
      socket.off();
    };

  }, [])

  useEffect(() => {
    if (tableName) {
      socket.emit("join table", { name, tableName }, () => {
      });
    };
  }, [tableName]);

  useEffect(() => {
    //this should retrieve blackjack players at this table from server
    socket.on("player joined", ({ name, tableName, presentPlayers }) => {
      console.log(name + "has joined" + tableName);
      console.log("players present:", presentPlayers);
      
    });
  }, []);


  return (
    <div className="blackjackTable">Welcome to blackjack at table: {tableName}, player {name}</div>
  );
};

export default BlackjackTable;