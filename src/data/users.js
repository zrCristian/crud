const path = require('path');
const bcrypt = require('bcryptjs');
const {
  writeJsonWithNewData,
  getDataByJsonName,
} = require('../utils/json');

const USER_DATA_PATH = path.resolve(__dirname, './json/users.json');

function getAllUsers() {
  return getDataByJsonName(USER_DATA_PATH);
}

function saveUser(user) {
  const id = new Date().getTime();
  const {
    name, password, lastname, email,
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
  });

  writeJsonWithNewData('users.json', JSON.stringify(users));
}

function getUserByEmail(email) {
  return getAllUsers().find((user) => user.email === email);
}

module.exports = {
  saveUser,
  getUserByEmail,
};
