const { entities } = require('../../config/constants');
const { dataSource } = require('../../config/db');

const categoryRepository = dataSource.getRepository(entities.category);

module.exports = {
  categoryRepository,
};
