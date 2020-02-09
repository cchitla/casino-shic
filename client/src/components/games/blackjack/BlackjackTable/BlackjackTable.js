import React, { useEffect, useState } from 'react';
import './BlackjackTable.css';
import io from 'socket.io-client';
import Table from './Table/Table';

let socket;

const BlackjackTable = (props) => {
  const [name, setName] = useState(null);
  const [tableName, setTableName] = useState(null);
  const [gameIsActive, setGameIsActive] = useState(true);
  const [joinedPlayers, setJoinedPlayers] = useState([]);

  const socketRoom = `blackjackTable ${tableName}`

  useEffect(() => {
    let ENDPOINT = "localhost:3001";
    // let ENDPOINT = "https://casino-shic.herokuapp.com/";
    // let ENDPOINT = "https://gentle-forest-68567.herokuapp.com/";
    socket = io(ENDPOINT);
    setName(props.profile.username);
    setTableName(props.tableName);

    return () => {
      socket.emit("disconnect");
      socket.off();
    };

  }, []);

  useEffect(() => {
    if (tableName) {
      socket.emit("join table", { name, tableName }, () => {
      });
    };
  }, [tableName]);

  useEffect(() => {
    //this should retrieve blackjack players at this table from server
    socket.on("player joined", ({ name, tableName, presentPlayers }) => {
      setJoinedPlayers(presentPlayers);
      console.log("players present:", presentPlayers);
    });
  }, []);


  return (
    <>
      <div className="blackjackTable">Welcome to blackjack at table: {tableName}, player {name}</div>
      {joinedPlayers.map((player) => <span>{player.name} ,</span>)}
      <Table
        profile={props.profile}
        tableName={tableName}
        gameIsActive={gameIsActive}
        setGameIsActive={setGameIsActive}
        joinedPlayers={joinedPlayers}
        setJoinedPlayers={setJoinedPlayers} />
    </>
  );
};

export default BlackjackTable;