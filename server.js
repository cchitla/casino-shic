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
const { players, setPlayer, getPlayersAtTable,
  createNewTable, removePlayer, getPlayer } = require('./server-games/blackjack/blackjack');
const { getTables } = require('./server-games/blackjack/tables');


// SOCKET COMMS
io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { user, updatedUser } = addUser({ id: socket.id, name, room });

    if (updatedUser) {
      console.log("recieved updated user")
      socket.emit("message", { user: 'admin', text: `${updatedUser.name} welcome to room ${updatedUser.room}.` });
      socket.broadcast.to(updatedUser.room).emit('message', { user: "admin", text: `${updatedUser.name} has joined.` });
      io.to(updatedUser.room).emit("roomData", { room: updatedUser.room, users: getUsersInRoom(updatedUser.room) });
    };

    if (user) {
      console.log("received user")
      socket.join(user.room);
      socket.emit("message", { user: 'admin', text: `${user.name} welcome to room ${user.room}.` });
      socket.broadcast.to(user.room).emit('message', { user: "admin", text: `${user.name} has joined.` });
      io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });
    };

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
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    console.log("message sent from", user, message);
    io.to(user.room).emit("message", { user: user.name, text: message });
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

    const newPlayer = {
      name: name,
      room: tableName,
      tablePosition: 1,
      id: socket.id,
      // hand starts empty, gets updated after deal
      hand: null,
      // score updated after deal, then each time player hits
      // score: 15,
      // updates to true if score calc is over  21
      bust: false
    };

    setPlayer(newPlayer);

    let presentPlayers = getPlayersAtTable(tableName)
    io.to(socket.id).emit("player joined", { name, tableName, presentPlayers });
    callback();
  });

  socket.on("blackjack hit", ({ name, tableName, hand }) => {
    // run blackjack dealSingleCard
    // calculate score
    // send card to client and display it on table
    // send whether user has busted or not
  });

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