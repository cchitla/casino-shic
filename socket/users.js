const users = [];

const addUser = ({ id, name, room}) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (existingUser) return { error: "Username is taken"};

  const user = { id, name, room};
  users.push(user);
  console.log(name, "has been added to user array in room", room);
  console.log(users);

  return { user };
};

const removeUser = (id) => {
  // find user in users array
  const index = users.findIndex((user) => user.id === id);
  // if user is found, remove from array at the index id was found at
  console.log("removing user")
  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = { addUser, removeUser, getUser, getUsersInRoom };
