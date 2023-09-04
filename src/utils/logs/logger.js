const { createLogger, transports, format } = require('winston');
require('dotenv').config();

const logLevel = process.env.LOG_LEVEL || 2;
const writeLogFile = !!process.env.LOG_FILE_PATH;
const logFilePath = process.env.LOG_FILE_PATH || './logs/all-logs.log';

const transportsArray = [new transports.Console()];

if (writeLogFile) {
  transportsArray.push(new transports.File({
    filename: logFilePath,
    json: false,
    maxsize: 5242880,
    maxFiles: 5,
  }));
}

const LOGS_LEVEL_MAP = {
  0: 'error',
  1: 'warn',
  2: 'info',
  3: 'http',
  4: 'verbose',
  5: 'debug',
  6: 'silly',
};

const logger = createLogger({
  level: LOGS_LEVEL_MAP[logLevel],
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf((info) => `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`),
  ),
  transports: transportsArray,
});

module.exports = logger;
