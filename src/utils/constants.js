const path = require('path');

const errors = {
  courses: {
    minLengthName: 'El curso debe tener al menos 3 caracteres',
    maxLengthName: 'El curso solo puede tener hasta 100 caracteres',
    negativePrice: 'El precio debe ser mayor a 0',
  },
  users: {},
};

const COURSES_PHOTOS_PATH = path.resolve(__dirname, '../../public/images/courses');

const defaultValues = {
  coursesPerPage: 12,
};

module.exports = {
  COURSES_PHOTOS_PATH,
  errors,
  defaultValues,
};
