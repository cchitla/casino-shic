import React, { useEffect, useState } from 'react';
import './BlackjackTable.css';
import io from 'socket.io-client';
import Table from './Table/Table';


let socket;
let name;

const BlackjackTable = (props) => {
  // const [name, setName] = useState(null);
  const [tableName, setTableName] = useState(null);
  const [player, setPlayer] = useState();
  const [gameIsActive, setGameIsActive] = useState(false);
  const [joinedPlayers, setJoinedPlayers] = useState([]);
  const [betting, setBetting] = useState(false);
  const [handActive, setHandActive] = useState(false);
  const [playerBet, setPlayerBet] = useState(null);
  const [currentTurn, setCurrentTurn] = useState(false);
  const [playerHand, setPlayerHand] = useState(null);
  const [playerScore, setPlayerScore] = useState(null);
  const [playerBust, setplayerBust] = useState(false);
  const [winners, setWinners] = useState(null);

  window.addEventListener("unload", (event) => {
    socket.emit("leave blackjack table", { name, tableName });
  });

  window.addEventListener("beforeunload", (event) => {
    socket.emit("leave blackjack table", { name, tableName });
  });

  useEffect(() => {
    // let ENDPOINT = "localhost:3001";
    let ENDPOINT = "https://casino-shic.herokuapp.com/";
    // let ENDPOINT = "https://gentle-forest-68567.herokuapp.com/";
    socket = io(ENDPOINT);
    name = props.profile.username;
    // setName(props.profile.username);
    setTableName(props.tableName);

    return () => {
      socket.emit("leave blackjack table", { name, tableName });
      socket.off();
    };
  }, []);

  useEffect(() => {
    if (tableName) socket.emit("join table", { name, tableName }, () => { });
  }, [tableName]);

  useEffect(() => {
    socket.on("player joined", ({ name, tableName, presentPlayers }) => {
      setJoinedPlayers(presentPlayers);
    });

    socket.on("deal table", ({ tableName, presentPlayers }) => {
      setJoinedPlayers(presentPlayers);
      setHandActive(true);
      const thisPlayer = presentPlayers.find(player => player.name === name);
      const { currentTurn, score, hand } = thisPlayer;
      setPlayer(thisPlayer);
      setCurrentTurn(currentTurn);
      setPlayerHand(hand);
      setPlayerScore(score);
    });
  }, []);

  useEffect(() => {
    socket.on("player left", ({ name, tableName, presentPlayers }) => {
      setJoinedPlayers(presentPlayers);
    });

    socket.on("set blackjack active", (tableName) => setGameIsActive(true));
    socket.on("set betting active", (tableName) => setBetting(true));

    socket.on("dealt hit", ({ presentPlayers, table, player }) => {
      setJoinedPlayers(presentPlayers);
      setCurrentTurn(player.currentTurn);
      setPlayerScore(player.score);
      setPlayerHand(player.hand);
      setplayerBust(player.bust);
    });

    socket.on("hand completed", ({ table, winners }) => {
      setWinners(winners)
      console.log(winners)
    });
  }, []);

  useEffect(() => {
    if (gameIsActive) socket.emit("start blackjack", tableName);
  }, [gameIsActive]);

  useEffect(() => {
    if (playerBet) socket.emit("send bet", { name, playerBet, tableName });
  }, [playerBet]);

  useEffect(() => {
    if (betting) socket.emit("betting active", tableName);
  }, [betting]);

  const hitCard = () => {
    socket.emit("blackjack hit", { name, tableName });
  }

  const stayHand = () => {
    socket.emit("blackjack stay", { name, tableName });
  }




  return (
    <>
      <div className="blackjackTable">Welcome to blackjack at table: {tableName}, player {name}</div>
      <Table
        currentTurn={currentTurn}
        playerHand={playerHand}
        playerScore={playerScore}
        playerBust={playerBust}
        winners={winners}
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