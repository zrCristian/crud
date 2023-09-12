const bcrypt = require('bcryptjs');
const { userRepository } = require('../data/repositories/UserRepository');

async function getAll() {
  return userRepository.findBy();
}

async function findByEmail(email) {
  return userRepository.findOne({
    where: {
      email,
    },
  });
}

async function findById(id) {
  return userRepository.findOne({
    where: {
      id,
    },
  });
}

async function save(user) {
  const sendNotifications = user.sendSpam === 'on';
  const password = bcrypt.hashSync(user.password, 10);

  const {
    name,
    lastname,
    email,
  } = user;

  userRepository.save({
    name,
    password,
    lastname,
    email,
    sendNotifications,
  });
}

module.exports = {
  getAll,
  findByEmail,
  findById,
  save,
};
