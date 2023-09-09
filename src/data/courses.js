const path = require('path');
const fs = require('fs');
const {
  getDataByJsonName,
  writeJsonWithNewData,
} = require('../utils/json');
const { defaultValues, folderPath } = require('../config/constants');

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

function saveCourse(course, imageFileName) {
  const {
    name,
    description,
    price,
    duration,
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

function deleteCourse(courseId) {
  const course = getCourseById(courseId);

  if (course.image) {
    fs.unlinkSync(`${folderPath.COURSES_PHOTOS}/${course.image}`);
  }

  const courses = getAllCourses().filter((c) => c.id !== courseId);

  writeJsonWithNewData('courses.json', JSON.stringify(courses));
}

function updateCourse(courseId, course, imageFileName) {
  const oldCourse = getCourseById(courseId);

  const updatedCourse = {
    ...oldCourse,
    name: course.name,
    description: course.description,
    price: +course.price,
    duration: +course.duration,
  };

  if (imageFileName) {
    updateCourse.image = imageFileName;
  }

  const updateCourses = getAllCourses().map((c) => {
    if (c.id === courseId) {
      return updatedCourse;
    }
    return c;
  });

  writeJsonWithNewData('courses.json', JSON.stringify(updateCourses));
}

module.exports = {
  getAllCourses,
  getCourseById,
  saveCourse,
  updateCourse,
  deleteCourse,
  getPaginatedCourses,
  searchCoursesByName,
  getCoursesByIds,
};
