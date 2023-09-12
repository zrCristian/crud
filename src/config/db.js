const typeorm = require('typeorm');
const path = require('path');
const { db } = require('./env');
const logger = require('../utils/logs/logger');

const entitiesFiles = path.resolve(__dirname, '../data/entities/*.js');

const dataSource = new typeorm.DataSource({
  type: 'mysql',
  host: db.DB_HOST,
  port: db.DB_PORT,
  username: db.DB_USER,
  password: db.DB_PASSWORD,
  database: db.DB_DATABASE,
  synchronize: true,
  entities: [entitiesFiles],
  logging: db.DB_LOG_QUERIES,
});

async function initDB() {
  logger.debug(`connecting to database: ${db.DB_HOST}:${db.DB_PORT}`);
  logger.debug(`db user: ${db.DB_USER}`);
  logger.debug(`db database: ${db.DB_DATABASE}`);
  logger.debug(`logging db queries: ${db.DB_LOG_QUERIES}`);

  try {
    await dataSource.initialize();
    logger.info(`connected to database: ${db.DB_HOST}:${db.DB_PORT}`);
  } catch (error) {
    logger.error('error while connecting to database');
    logger.error(error);
  }
}

module.exports = {
  initDB,
  dataSource,
};
