const { entities } = require('../../config/constants');
const { dataSource } = require('../../config/db');

const userRepository = dataSource.getRepository(entities.user);

module.exports = {
  userRepository,
};
