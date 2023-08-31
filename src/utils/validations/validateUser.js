const {
  Validator,
  SchemaValidator,
  isEmail,
} = require('another-validator');
const { errors } = require('../constants');

const nameValidator = new Validator()
  .notNull()
  .minLength(3, errors.users.minLengthName)
  .maxLength(100, errors.courses.maxLengthName)
  .notEmpty(errors.courses.minLengthName);

const emailValidator = new Validator()
  .notEmpty()
  .notNull()
  .addRule((email) => isEmail(email));

function buildPasswordValidator(user) {
  const passwordValidator = new Validator()
    .notBlank()
    .notNull()
    .minLength(6, errors.password.minLength)
    .maxLength(20, errors.password.minLength)
    .requireLowercase(errors.password.requiresLowercase)
    .requireUppercase(errors.password.requiresUppercase)
    .requireNumber(errors.password.requiresNumber)
    .requireSpecialCharacter(errors.password.requiresSpecialCharacter)
    .addRule((p) => p === user.passwordConfirmation, errors.password.confirmation);

  return passwordValidator;
}

function buildValidator(user) {
  const userValidator = new SchemaValidator({
    name: nameValidator,
    lastname: nameValidator,
    email: emailValidator,
    password: buildPasswordValidator(user),
  });

  return userValidator;
}

module.exports = {
  buildValidator,
};
