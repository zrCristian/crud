const {
  Validator,
  SchemaValidator,
  isEmail,
} = require('another-validator');
const { errors } = require('../constants');

function validateUser(user) {
  const nameValidator = new Validator()
    .minLength(3, errors.users.minLengthName)
    .maxLength(100, errors.courses.maxLengthName)
    .notEmpty(errors.courses.minLengthName);

  const emailValidator = new Validator()
    .notEmpty()
    .addRule((email) => isEmail(email));

  const passwordValidator = new Validator()
    .minLength(6, errors.password.minLength)
    .maxLength(20, errors.password.minLength)
    .requireLowercase(errors.password.requiresLowercase)
    .requireUppercase(errors.password.requiresUppercase)
    .requireNumber(errors.password.requiresNumber)
    .requireSpecialCharacter(errors.password.requiresSpecialCharacter)
    .addRule((password) => password === user.confirmPassword, 'Las contraseñas deben coincidir');

  const courseValidator = new SchemaValidator({
    name: nameValidator,
    lsatname: nameValidator,
    email: emailValidator,
    password: passwordValidator,
  });

  courseValidator.validate(user);
}

module.exports = validateUser;
