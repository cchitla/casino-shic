import React, { useEffect, useState } from 'react';
import './BlackjackTable.css';
import io from 'socket.io-client';
import Table from './Table/Table';


let socket;

const BlackjackTable = (props) => {
  const [name, setName] = useState(null);
  const [tableName, setTableName] = useState(null);
  const [player, setPlayer] = useState();
  const [gameIsActive, setGameIsActive] = useState(false);
  const [joinedPlayers, setJoinedPlayers] = useState([]);
  const [betting, setBetting ] = useState(false);
  const [handActive, setHandActive] = useState(false);
  const [playerBet, setPlayerBet] = useState(null);
  const [currentTurn, setCurrentTurn] = useState(false);
  
  window.addEventListener("unload", (event) => {
    socket.emit("leave blackjack table", {name, tableName});
  });

  window.addEventListener("beforeunload", (event) => {
    socket.emit("leave blackjack table", {name, tableName});
  });

  useEffect(() => {
    let ENDPOINT = "localhost:3001";
    // let ENDPOINT = "https://casino-shic.herokuapp.com/";
    // let ENDPOINT = "https://gentle-forest-68567.herokuapp.com/";
    socket = io(ENDPOINT);
    setName(props.profile.username);
    setTableName(props.tableName);
    
    return () => {
      socket.emit("leave blackjack table", {name, tableName});
      socket.off();
    };
  }, []);

  useEffect(() => {
    if (tableName) socket.emit("join table", { name, tableName }, () => {});
  }, [tableName]);

  useEffect(() => {
    socket.on("player joined", ({ name, tableName, presentPlayers }) => {
      setJoinedPlayers(presentPlayers);
      console.log("players present after join:", presentPlayers);
    });

    socket.on("deal table", ({ tableName, presentPlayers }) => {
      setJoinedPlayers(presentPlayers);
      setHandActive(true);
      console.log("cards dealt", presentPlayers);
    });
  }, []);

  useEffect(() => {
    socket.on("player left", ({ name, tableName, presentPlayers }) => {
      setJoinedPlayers(presentPlayers);
      console.log("a player left:", presentPlayers);
    });

    socket.on("set blackjack active", (tableName) => setGameIsActive(true));
    socket.on("set betting active", (tableName) => setBetting(true));

    socket.on("dealt hit", ({ presentPlayers, table}) => {
      setJoinedPlayers(presentPlayers);
      console.log(presentPlayers);
      console.log(table);
    })
  }, []);

  useEffect(() => {
    if (gameIsActive) socket.emit("start blackjack", tableName);
  }, [gameIsActive]);

  useEffect(() => {
    if (playerBet) socket.emit("send bet", {name, playerBet, tableName});
  }, [playerBet]);

  useEffect(() => {
    if (betting) socket.emit("betting active", tableName);
  }, [betting]);

  useEffect(() => {
    
  }, [handActive]);

  const hitCard = () => {
    socket.emit("blackjack hit", {name, tableName});
  }

  const stayHand = () => {
    socket.emit("blackjack stay", {name, tableName});
  }




  return (
    <>
      <div className="blackjackTable">Welcome to blackjack at table: {tableName}, player {name}</div>
      <Table
        user={props.user}
        profile={props.profile}
        tableName={tableName}
        gameIsActive={gameIsActive}
        setGameIsActive={setGameIsActive}
        betting={betting}
        setBetting={setBetting}
        playerBet={playerBet}
        setPlayerBet={setPlayerBet}
        handActive={handActive}
        setHandActive={setHandActive}
        joinedPlayers={joinedPlayers}
        setJoinedPlayers={setJoinedPlayers}
        hitCard={hitCard}
        stayHand={stayHand} />
    </>
  );
};

export default BlackjackTable;