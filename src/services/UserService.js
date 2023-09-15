const bcrypt = require('bcryptjs');
const { userRepository } = require('../data/repositories/UserRepository');
const logger = require('../utils/logs/logger');
const NotFoundException = require('../errors/notFoundException');

async function getAll() {
  return userRepository.findBy();
}

async function getByEmail(email) {
  logger.debug(`seaching user with email: ${email}`);

  const user = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    logger.error(`user with email ${email} does not exists`);
    throw new NotFoundException();
  }

  return user;
}

async function getById(id) {
  logger.debug(`seaching user with id: ${id}`);

  const user = userRepository.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    logger.error(`user with id ${id} does not exists`);
    throw new NotFoundException();
  }

  return user;
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

async function deleteById(id) {
  logger.debug(`deleting user with id: ${id}`);

  userRepository.save({
    id,
    isDeleted: true,
    deletedAt: new Date(),
  });

  logger.debug(`user with id: ${id} deleted`);
}

module.exports = {
  getAll,
  getById,
  getByEmail,
  save,
  deleteById,
};
