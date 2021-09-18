const users = [];
// addUser,removeUser,getUser,getUserInRoom

// ADDING USER
const addUser = ({ id, username, room }) => {
  // clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate the data
  if (!username || !room) {
    return {
      error: "username and room are required",
    };
  }

  // chaecking for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //  validate user
  if (existingUser) {
    return {
      error: "Username in use!",
    };
  }

  // store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

// REMOVING USER
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0]; //[0] thus 1 after index will only remove 1 row which is found by id..if you write more than 1 it
  }
};

// GET USER
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

// GET USER IN ROOM
const getUserInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

//adding user by calling
addUser({
  id: 22,
  username: "Priyal",
  room: "Nimach",
});
addUser({
  id: 23,
  username: "riya",
  room: "center city",
});
addUser({
  id: 22,
  username: "pooja",
  room: "Nimach",
});
addUser({
  id: 11,
  username: "chaya",
  room: "south philly",
});

const user = getUser(22);
// console.log(user);

const userList = getUserInRoom("london");
// console.log(userList);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
};
