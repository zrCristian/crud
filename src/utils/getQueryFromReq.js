const logger = require('./logs/logger');

module.exports = function getQueryFromRequest(req) {
  try {
    const query = {
      order: req.query.order,
      page: req.query.page || 0,
      keyword: req.query.search || '',
    };

    if (query.order && query.order.toLowerCase() !== 'asc') {
      query.order = 'DESC';
    }

    return query;
  } catch (e) {
    logger.error('error while creating query');
    return {
      order: 'DESC',
      page: 0,
      keyword: '',
    };
  }
};
