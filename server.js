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

const {addUser, removeUser, getUser, getUsersInRoom } = require("./socket/users");

io.on("connection", (socket) => {
  socket.on("join", ({name, room}, callback) => {
    const { user, updatedUser } = addUser( { id: socket.id, name, room });

    if (updatedUser) {
      socket.emit("message", { user: 'admin', text: `${updatedUser.name} welcome to room ${updatedUser.room}.`});
      socket.broadcast.to(updatedUser.room).emit('message', { user: "admin", text: `${updatedUser.name} has joined.`});

      io.to(updatedUser.room).emit("roomData", { room: updatedUser.room , users: getUsersInRoom(updatedUser.room) });
    };

    if (user) {
    socket.join(user.room);

    socket.emit("message", { user: 'admin', text: `${user.name} welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: "admin", text: `${user.name} has joined.`});

    io.to(user.room).emit("roomData", { room: user.room , users: getUsersInRoom(user.room) });
    };
    
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    // need to change this to search by name and room, if user rejoins, it's a new socket id!!!
    // but... socket.id matches the updated user that has been pushed to the users array???
    const user = getUser(socket.id);
    console.log("message sent from", user)

    // io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(socket.id).emit("message", { user: user.name, text: message });
    console.log("message  emitted??");

    // io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room)})
    io.to(socket.id).emit("roomData", { room: user.room, users: getUsersInRoom(user.room)})

    callback();
  });

  socket.on("disconnect", () => {
    console.log("received disconnect message");
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user: "admin", text: `${user.name} has left.`})
    }
  });
});