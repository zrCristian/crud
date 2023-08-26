const { getAllCourses } = require('../data/courses');

function listAll(req, res) {
  const courses = getAllCourses();

  res.render('courses/courses', { courses });
}

module.exports = {
  listAll,
};
