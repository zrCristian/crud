const path = require('path');
const {
  getDataByJsonName,
  writeJsonWithNewData,
} = require('../utils/json');

const COURSES_PATH = path.resolve(__dirname, './json/courses.json');

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

function saveCourse(course, imageFileName) {
  const {
    name, description, price, duration,
  } = course;

  const newCourse = {
    id: new Date().getTime(),
    name,
    description,
    price: +price,
    duration: +duration,
    image: imageFileName,
    stars: 0,
  };

  const courses = getAllCourses();
  courses.push(newCourse);

  writeJsonWithNewData('courses.json', JSON.stringify(courses));
}

module.exports = {
  getAllCourses,
  getCourseById,
  saveCourse,
  getPaginatedCourses,
};
