const { entities } = require('../../config/constants');
const { dataSource } = require('../../config/db');

const courseRepository = dataSource.getRepository(entities.course);

module.exports = {
  courseRepository,
};
