const logger = require('../utils/logs/logger');

function logHTTPCalls(req, res, next) {
  logger.debug(req.path);

  next();
}

module.exports = logHTTPCalls;
