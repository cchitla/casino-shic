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
  createNewTable,
  removePlayer,
  getPlayer,
  dealTable,
  addPlayerHand } = require('./server-games/blackjack/blackjack');

const { getTables } = require('./server-games/blackjack/tables');


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
    user ? io.to(user.room).emit('message', { user: "admin", text: `${user.name} has left.` }) : null;
    user ? io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) }) : null;
  });

  // CHAT
  // socket.on("sendMessage", (message, callback) => {
  socket.on("sendMessage", ({message, length}, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message, length });
    io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) })
    callback();
  });

  //BLACKJACK
  socket.on("retrieve blackjack tables", () => {
    let currentTables = getTables()
    socket.emit("send blackjack tables", currentTables);
  });

  socket.on("new blackjack table", (tableName) => {
    createNewTable(tableName);
  });

  socket.on("join table", ({ name, tableName }, callback) => {
    name = name.trim().toLowerCase();

    const {player } = setPlayer(socket, name, tableName);
    

    let presentPlayers = getPlayersAtTable(tableName)

    dealTable(tableName);

    io.to(socket.id).emit("player joined", { name, tableName, presentPlayers });
    socket.broadcast.to(player.tableName).emit("player joined", {name, tableName, presentPlayers})
    callback();
  });

  socket.on("blackjack hit", ({ name, tableName, hand }) => {
    // run blackjack dealSingleCard
    // calculate score
    // send card to client and display it on table
    // send whether user has busted or not
  });

  socket.on("deal blackjack", (tableName) => {

  })

  socket.on("blackjack stay", ({ name, tableName }) => {
    // get tablePosition of player
    // switch active turn to player at tablePosition + 1
  });

  socket.on("leave blackjack table", (player) => {
    // console.log("disconnecting a player");
    let user = getPlayer(socket.id);
    // console.log("disconnected this player:", user)
    removePlayer(socket.id);
    user ? io.to(user.room).emit('message', { user: "admin", text: `${user.name} has left.` }) : null;
    user ? io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) }) : null;
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