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

const {addUser, removeUser, getUser, getUsersInRoom } = require("./socket/users");

io.on("connection", (socket) => {
  socket.on("join", ({name, room}, callback) => {
    console.log(name + "has joined")
    const { error, user } = addUser( { id: socket.id, name, room });
    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", { user: 'admin', text: `${user.name} welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: "admin", text: `${user.name} has joined.`});

    io.to(user.room).emit("roomData", { room: user.room , users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room)})

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: "admin", text: `${user.name} has left.`})
    }
  });
});