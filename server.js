require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/casinoShickDB";
const routes = require('./routes');
const socketio = require('socket.io');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.set('useFindAndModify', false);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
app.use(routes);

const server = app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

const io = socketio(server);

//chat imports
const { addUser, removeUser, getUser, getUsersInRoom } = require("./socket/users");

//blackjack imports
const {
  players,
  setPlayer,
  getPlayersAtTable,
  getPlayerById,
  createNewTable,
  removePlayer,
  getPlayer,
  getTable,
  dealTable,
  addPlayerToTable,
  getPlayerByName,
  dealCard,
  nextPlayerTurn,
  getWinners } = require('./server-games/blackjack/blackjack');

const { getTables,
        createDealer,
        removePlayerFromTable,
        resetTable } = require('./server-games/blackjack/tables');


// SOCKET COMMS
io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { user, updatedUser } = addUser({ id: socket.id, name, room });
    handleUserConnection(socket, user, updatedUser, room);
    io.to(room).emit("roomData", { room: room, users: getUsersInRoom(room) });
    callback();
  });

  socket.on("disconnect chat", () => {
    // console.log("disconnecting a chat user");
    let user = getUser(socket.id);
    // console.log("this user disconnected from chat:", user);
    removeUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', { user: "admin", text: `${user.name} has left.` });
      io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });
    };
  });

  // CHAT
  // socket.on("sendMessage", (message, callback) => {
  socket.on("sendMessage", ({ message, length }, callback) => {
    const user = getUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", { user: user.name, text: message, length });
      io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) })
    }
    callback();
  });

  //BLACKJACK

  // setplayer
  // setPlayer(socket, name, tableName, bet, hand, score, bust)
  socket.on("retrieve blackjack tables", () => {
    let currentTables = getTables()
    socket.emit("send blackjack tables", currentTables);
  });

  socket.on("new blackjack table", (tableName) => {
    createNewTable(tableName);
  });

  socket.on("join table", ({ name, tableName }, callback) => {
    name = name.trim().toLowerCase();

    const { player } = setPlayer(socket, name, tableName);
    let presentPlayers = getPlayersAtTable(tableName);

    io.to(socket.id).emit("player joined", { name, tableName, presentPlayers });
    presentPlayers.map((player) => {
      io.to(player.id).emit("player joined", { name, tableName, presentPlayers });
    });
    addPlayerToTable(player);
    callback();
  });

  socket.on("start blackjack", (tableName) => {
    let table = getTable(tableName);
    table.active = true;
    // then go to blackjack lobby and render tables only where active: false
    let presentPlayers = getPlayersAtTable(tableName);
    presentPlayers.map((player) => io.to(player.id).emit("set blackjack active", tableName));
  });

  socket.on("betting active", (tableName) => {
    let presentPlayers = getPlayersAtTable(tableName);
    presentPlayers.map((player) => io.to(player.id).emit("set betting active", tableName));
  })

  socket.on("send bet", ({ name, playerBet, tableName }) => {
    console.log(`got bet of ${playerBet} from ${name} at ${tableName}`);
    let player = getPlayerById(socket.id);
    let table = getTable(player.tableName);
    player.bet = playerBet;
    table.betsReceived = table.betsReceived + 1;

    if (table.betsReceived === table.players.length) {
      const { dealer } = createDealer(tableName);
      addPlayerToTable(dealer);
      dealTable(table);
      let presentPlayers = getPlayersAtTable(tableName);
      presentPlayers[0].currentTurn = true;
      presentPlayers.map((player) => {
        io.to(player.id).emit("deal table", { tableName, presentPlayers, table });
      });
    };
  });

  socket.on("blackjack hit", ({ name, tableName }) => {
    let player = getPlayerById(socket.id);
    let table = getTable(player.tableName);
    // console.log("scorebefore hit", player.score);
    dealCard(player, table);
    // console.log("score after hit", player.score, player.bust);


    if (player.bust) {
      nextPlayerTurn(player, table, socket)
      if (table.status === "completed") {
        let winners = getWinners(table);
        console.log("winners", winners)
        socket.emit("hand completed", { table, winners })
      };
    }

    let presentPlayers = getPlayersAtTable(tableName);
    presentPlayers.map((player) => {
      io.to(player.id).emit("dealt hit", { presentPlayers, table, player });
    });
  });

  socket.on("blackjack stay", ({ name, tableName }) => {
    console.log("player stay");
    let player = getPlayerById(socket.id);
    let table = getTable(player.tableName);
    nextPlayerTurn(player, table, socket);
    if (table.status === "completed") {
      let winners = getWinners(table);
      console.log("winners", winners );
      socket.emit("hand completed", { table, winners });
    };
  });

  socket.on("leave blackjack table", ({ name, tableName }) => {
    let user = getPlayerById(socket.id);
    if (user) {
      removePlayer(user.id);
      removePlayerFromTable(user.id, user.tableName);
      let presentPlayers = getPlayersAtTable(user.tableName);
      presentPlayers.map((player) => {
        io.to(player.id).emit("player left", { name, tableName, presentPlayers });
      });

      removePlayerFromTable(user.tableName);
      let table = getTable(user.tableName);
      resetTable(table);
      let allTables = getTables()
      console.log("tables after reset", allTables);
      
    };
  });
});


const handleUserConnection = (socket, user, updatedUser, room) => {
  if (updatedUser) {
    socket.emit("message", { user: 'admin', text: `${updatedUser.name} welcome to room ${updatedUser.room}.` });
    socket.broadcast.to(room).emit('message', { user: "admin", text: `${updatedUser.name} has joined.` });
    // io.to(updatedUser.room).emit("roomData", { room: room, users: getUsersInRoom(room) });
  } else if (user) {
    socket.join(user.room);
    socket.emit("message", { user: 'admin', text: `${user.name} welcome to room ${user.room}.` });
    socket.broadcast.to(room).emit('message', { user: "admin", text: `${user.name} has joined.` });
    // io.to(room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });
  };
}; 