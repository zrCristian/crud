const path = require('path');
const {
  getDataByJsonName,
  writeJsonWithNewData,
} = require('../utils/json');
const { defaultValues } = require('../config/constants');

const COURSES_PATH = path.resolve(__dirname, './json/courses.json');

function getAllCourses() {
  const courses = getDataByJsonName(COURSES_PATH);

  return courses;
}

function getPaginatedCourses(
  pageNumber = 0,
  coursesPerPage = defaultValues.coursesPerPage,
  courses = getAllCourses(),
) {
  const firstIndex = pageNumber * coursesPerPage;
  const lastIndex = Math.min((pageNumber + 1) * coursesPerPage, courses.length);

  return courses.slice(firstIndex, lastIndex);
}

function searchCoursesByName(name) {
  return getAllCourses().filter((course) => course.name.toLowerCase().includes(name.toLowerCase()));
}

function getCourseById(id) {
  const courses = getAllCourses();

  return courses.find((course) => course.id === id);
}

function getCoursesByIds(ids) {
  return ids.map((id) => getAllCourses().find((c) => c.id === id));
}

module.exports = {
  getAllCourses,
  getCourseById,
  getPaginatedCourses,
  searchCoursesByName,
  getCoursesByIds,
};
