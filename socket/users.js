const users = [];

const addUser = ({ id, name, room}) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // this is here because chat component is not unmounting on page change
  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (existingUser) {
    removeUser(existingUser.id)
    console.log(existingUser, "removed")
    updatedUser = { id, name, room };
    users.push(updatedUser);
    console.log(updatedUser, "added")
    return { updatedUser }
  };

  const user = { id, name, room};
  users.push(user);
  console.log(name, "has been added to user array in room", room);
  console.log(users);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  console.log("removing user");
  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = { addUser, removeUser, getUser, getUsersInRoom };
