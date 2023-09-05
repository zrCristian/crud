const {
  getCourseById,
  getPaginatedCourses,
  getAllCourses,
  saveCourse,
  updateCourse,
  deleteCourse,
  searchCoursesByName,
} = require('../data/courses');
const { defaultValues } = require('../utils/constants');

function searchCourses(req, res) {
  const page = req.query.page ? (+(req.query.page) - 1) : 0;
  const { search } = req.query;

  const courses = searchCoursesByName(search);
  const totalNumberOfCourses = courses.length;
  const numberOfPages = Math.ceil(totalNumberOfCourses / defaultValues.coursesPerPage);

  res.render('courses/courses', {
    courses,
    metadata: {
      numberOfPages,
      page: page + 1,
    },
  });
}

function listAll(req, res) {
  const { search } = req.query;

  if (search) {
    return searchCourses(req, res);
  }

  const page = req.query.page ? (+(req.query.page) - 1) : 0;
  const courses = getPaginatedCourses(page);
  const totalNumberOfCourses = getAllCourses().length;
  const numberOfPages = Math.ceil(totalNumberOfCourses / defaultValues.coursesPerPage);

  const hasCreatedNewCourse = req.session?.courseCreated || false;

  if (hasCreatedNewCourse) {
    res.locals.courseCreated = true;
    req.session.courseCreated = null;
  }

  return res.render('courses/courses', {
    courses,
    metadata: {
      numberOfPages,
      page: page + 1,
    },
  });
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
  saveCourse(req.body, req.file.filename);
  req.session.courseCreated = true;

  res.redirect('/cursos');
}

function editView(req, res) {
  const id = +req.params.id;
  const course = getCourseById(id);

  res.render('courses/edit', { course });
}

function edit(req, res) {
  const id = +req.params.id;
  updateCourse(id, req.body, req.file?.filename);

  res.redirect('/cursos');
}

function deleteById(req, res) {
  deleteCourse(+req.params.id);

  res.redirect('/cursos');
}

module.exports = {
  listAll,
  createView,
  getById,
  create,
  editView,
  edit,
  deleteById,
  searchCourses,
};
