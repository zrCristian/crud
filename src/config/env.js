const logger = require('../utils/logs/logger');

require('dotenv').config();

const DEFAULT_SECRET = 'secret';

const secrets = {
  JWT_SECRET: process.env.JWT_SECRET || DEFAULT_SECRET,
  SESSION_SECRET: process.env.SESSION_SECRET || DEFAULT_SECRET,
};

const {
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST,
} = process.env;

const db = {
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST,
};

function warnUser(secretsObj) {
  Object.entries(secretsObj).forEach(([name, value]) => {
    if (value === DEFAULT_SECRET) {
      logger.warn(`You are not setting a value for the variable ${name}. I'm going to use the default value`);
    }
  });
}

warnUser(secrets);

module.exports = {
  db,
  secrets,
};
