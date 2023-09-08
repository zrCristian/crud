const bcrypt = require('bcryptjs');
const fs = require('fs');
const {
  writeJsonWithNewData,
  getDataByJsonName,
} = require('../utils/json');
const NotFoundException = require('../errors/notFoundException');
const { folderPath } = require('../config/constants');

function getAllUsers() {
  return getDataByJsonName(folderPath.USER_DATA_FILE);
}

function saveUser(user) {
  const id = new Date().getTime();
  const {
    name,
    password,
    lastname,
    email,
  } = user;

  const sendSpam = user.sendSpam === 'on';
  const hashedPassword = bcrypt.hashSync(password, 10);
  const users = getAllUsers();

  users.push({
    id,
    name,
    email,
    lastname,
    password: hashedPassword,
    sendSpam,
    isAdmin: false,
    image: 'placeholder.png',
    gender: ' - ',
  });

  writeJsonWithNewData('users.json', JSON.stringify(users));
}

function getUserByEmail(email) {
  return getAllUsers().find((user) => user.email === email);
}

function getUserById(id) {
  const user = getAllUsers().find((u) => u.id === id);

  if (!user) {
    throw new NotFoundException();
  }

  return user;
}

function deleteUser(id) {
  const user = getUserById(id);

  if (user.image) {
    fs.unlinkSync(`${folderPath.USERS_PHOTOS}/${user.image}`);
  }

  const users = getAllUsers().filter((u) => u.id === id);
  writeJsonWithNewData('users.json', JSON.stringify(users));
}

module.exports = {
  saveUser,
  getUserByEmail,
  getUserById,
  deleteUser,
};
