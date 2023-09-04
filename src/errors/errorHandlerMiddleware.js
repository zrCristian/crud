const logger = require('../utils/logs/logger');

function errorHandler(err, req, res, next) {
  if (err.status === 404 || err.status === 401) {
    return res.status(404).render('404');
  }

  logger.error(err);

  if (err) {
    return res.status(err.status || 500).render('5xx');
  }

  return next();
}

module.exports = errorHandler;
