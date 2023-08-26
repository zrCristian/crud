const { COURSES_PATH } = require('../utils/constants');
const { getDataByJsonName } = require('../utils/json');

function getAllCourses() {
  const courses = getDataByJsonName(COURSES_PATH);

  return courses;
}

module.exports = {
  getAllCourses,
};
