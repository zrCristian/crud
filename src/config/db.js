const typeorm = require('typeorm');
const User = require('../data/entities/User');
const { db } = require('./env');
const logger = require('../utils/logs/logger');

const dataSource = new typeorm.DataSource({
  type: 'mysql',
  host: db.DB_HOST,
  port: db.DB_PORT,
  username: db.DB_USER,
  password: db.DB_PASSWORD,
  database: db.DB_DATABASE,
  synchronize: true,
  entities: [User],
});

async function initDB() {
  logger.info(`connecting to database: ${db.DB_HOST}:${db.DB_PORT}`);
  logger.debug(`db user: ${db.DB_USER}`);
  logger.debug(`db user: ${db.DB_USER}`);

  try {
    await dataSource.initialize();
  } catch (error) {
    logger.error('error while connecting to database');
    logger.error(error);
  }
}

module.exports = initDB;
