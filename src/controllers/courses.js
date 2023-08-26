const { getAllCourses } = require('../data/courses');

function listAll(req, res) {
  const courses = getAllCourses();

  res.render('courses/courses', { courses });
}

function createView(req, res) {
  res.render('courses/create');
}

function create(req, res) {
  res.redirect('/cursos');
}

module.exports = {
  listAll,
  createView,
  create,
};
