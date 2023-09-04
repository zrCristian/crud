const { createLogger, transports, format } = require('winston');
require('dotenv').config();

const logLevel = process.env.LOG_LEVEL || 2;

const LOGS_LEVEL = {
  0: 'error',
  1: 'warn',
  2: 'info',
  3: 'http',
  4: 'verbose',
  5: 'debug',
  6: 'silly',
};

const logger = createLogger({
  level: LOGS_LEVEL[logLevel],
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.File({
      filename: './logs/all-logs.log',
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ],
});

module.exports = logger;
