let users = [];

const addUser = ({ id, name, room}) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (existingUser) {
    removeUser(existingUser.id)
    // console.log(existingUser, "removed")
    updatedUser = { id, name, room };
    users.push(updatedUser);
    // console.log(updatedUser, "added")
    return { updatedUser }
  };

  const user = { id, name, room};
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  // console.log("before delete chat user", users);
  const remainingUsers = users.filter((user) => user.id !== id);
  users = remainingUsers;
  // console.log("deleted a chat user:", users);
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = { addUser, removeUser, getUser, getUsersInRoom };
