const { getAllCourses, getCourseById } = require('../data/courses');

function listAll(req, res) {
  const courses = getAllCourses();

  res.render('courses/courses', { courses });
}

function getById(req, res) {
  const { id } = req.params;

  const course = getCourseById(+id);
  res.render('courses/course', { course });
}

function createView(req, res) {
  res.render('courses/create');
}

function create(req, res) {
  console.log(req.body);
  res.redirect('/cursos');
}

module.exports = {
  listAll,
  createView,
  getById,
  create,
};
