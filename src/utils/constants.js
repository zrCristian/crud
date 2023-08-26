const path = require('path');

const COURSES_PATH = path.resolve(__dirname, '../data/courses.json');

const errors = {
  minLengthName: 'El curso debe tener al menos 3 caracteres',
  maxLengthName: 'El curso solo puede tener hasta 100 caracteres',
  negativePrice: 'El precio debe ser mayor a 0',
};

module.exports = {
  COURSES_PATH,
  errors,
};
