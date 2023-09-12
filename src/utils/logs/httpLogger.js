const morgan = require('morgan');
const logger = require('./logger');

logger.stream = {
  write: (message) => logger.http(message.substring(0, message.lastIndexOf('\n'))),
};

const morganMiddleware = morgan(
  ':method :url :status :response-time ms',
  {
    stream: logger.stream,
    skip: (req) => req.path.startsWith('/js')
      || req.path.startsWith('/images')
      || req.path.startsWith('/css')
      || req.path.startsWith('/favicon.ico'),
  },

);

module.exports = morganMiddleware;
