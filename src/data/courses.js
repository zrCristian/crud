const { COURSES_PATH } = require('../utils/constants');
const { getDataByJsonName } = require('../utils/json');

function getAllCourses() {
  const courses = getDataByJsonName(COURSES_PATH);

  return courses;
}

function getCourseById(id) {
  const courses = getAllCourses();

  return courses.find((course) => course.id === id);
}

module.exports = {
  getAllCourses,
  getCourseById,
};
