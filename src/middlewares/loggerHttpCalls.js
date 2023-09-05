const logger = require('../utils/logs/logger');

function logHTTPCalls(req, res, next) {
  logger.debug(`${req.method} ${req.path}`);

  next();
}

module.exports = logHTTPCalls;
