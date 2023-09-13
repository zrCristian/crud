const courseService = require('../../services/CourseService');
const buildPage = require('../../utils/buildPage');
const getQueryFromRequest = require('../../utils/getQueryFromReq');

async function getPaginated(req, res) {
  const query = getQueryFromRequest(req);

  const { data, count } = await courseService.getPaginated(query);
  const response = buildPage(data, count, query.page, query.order);

  res.json(response);
}

module.exports = {
  getPaginated,
};
