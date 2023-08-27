const { getCourseById, getPaginatedCourses, getAllCourses } = require('../data/courses');
const { defaultValues } = require('../utils/constants');
const { writeJsonWithNewData } = require('../utils/json');

function listAll(req, res) {
  const page = req.query.page ? (+(req.query.page) - 1) : 0;
  const courses = getPaginatedCourses(page);
  const totalNumberOfCourses = getAllCourses().length;
  const numberOfPages = Math.ceil(totalNumberOfCourses / defaultValues.coursesPerPage);

  res.render('courses/courses', {
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
  const {
    name, description, price, duration,
  } = req.body;

  const newCourse = {
    id: new Date().getTime(),
    name,
    description,
    price: +price,
    duration: +duration,
    image: req.file.filename,
    stars: 0,
  };

  const courses = getAllCourses();
  courses.push(newCourse);

  writeJsonWithNewData('courses.json', JSON.stringify(courses));

  res.redirect('/cursos');
}

module.exports = {
  listAll,
  createView,
  getById,
  create,
};
