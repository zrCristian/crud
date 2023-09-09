const { getAllCourses, getCoursesByIds: findCoursesByIds } = require('../../data/courses');

function getAll(req, res) {
  const courses = getAllCourses();
  res.json(courses);
}

function getCoursesByIds(req, res) {
  const idsArray = req.query.ids.split(',').map(Number);
  const courses = findCoursesByIds(idsArray);

  res.json(courses);
}

module.exports = {
  getAll,
  getCoursesByIds,
};
