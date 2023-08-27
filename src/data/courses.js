const { COURSES_PATH } = require('../utils/constants');
const { getDataByJsonName } = require('../utils/json');

function getAllCourses() {
  const courses = getDataByJsonName(COURSES_PATH);

  return courses;
}

function getPaginatedCourses(pageNumber = 0, coursesPerPage = 12) {
  const courses = getAllCourses();
  const firstIndex = pageNumber * coursesPerPage;
  const lastIndex = Math.min((pageNumber + 1) * coursesPerPage, courses.length);

  return courses.slice(firstIndex, lastIndex);
}

function getCourseById(id) {
  const courses = getAllCourses();

  return courses.find((course) => course.id === id);
}

module.exports = {
  getAllCourses,
  getCourseById,
  getPaginatedCourses,
};
