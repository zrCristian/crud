const path = require('path');

const errors = {
  userDeleted: 'El usuario fue eliminado, envie un mail a soporte para reactivar su cuenta',
  notNull: 'el campo no puede ser nulo',
  notBlank: 'el campo no puede estar vacío',
  isEmail: 'el mail no es valido',
  negativeNumber: 'el número no puede ser negativo',
  login: 'El email o la contraseña no son correctas',
  invalidType: 'El tipo de dato no es valido',
  courses: {
    minLengthName: 'El curso debe tener al menos 3 caracteres',
    maxLengthName: 'El curso solo puede tener hasta 100 caracteres',
    negativePrice: 'El precio debe ser mayor a 0',
  },
  users: {
    minLengthName: 'El nombre debe tener al menos 3 caracteres',
    maxLengthName: 'El nombre solo puede tener hasta 100 caracteres',
    uniqueEmail: 'Ya existe un usuario con ese mail',
  },
  password: {
    minLength: 'La contraseña debe tener al menos 6 caracteres',
    maxLength: 'La conrtaseña no puede tener mas de 20 caracteres',
    requiresNumber: 'La contraseña debe poseer al menos un número',
    requiresUppercase: 'La contraseña debe tener al menos una mayúscula',
    requiresLowercase: 'La contraseña debe tener al menos una minúscula',
    requiresSpecialCharacter: 'La contraseña debe tener al menos un carácter especial',
    confirmation: 'Las contraseñas no coinciden',
  },
};

const cookieKey = {
  user: 'user',
};

const folderPath = {
  COURSES_PHOTOS: path.resolve(__dirname, '../../public/images/courses'),
  USERS_PHOTOS: path.resolve(__dirname, '../../public/images/users'),
  USER_DATA_FILE: path.resolve(__dirname, './../data/json/users.json'),
};

const defaultValues = {
  coursesPerPage: 12,
};

const entities = {
  category: 'Category',
  user: 'User',
  course: 'Course',
  role: 'Role',
  order: 'Order',
  orderItem: 'OrderItem',
};

module.exports = {
  errors,
  cookieKey,
  defaultValues,
  folderPath,
  entities,
};
