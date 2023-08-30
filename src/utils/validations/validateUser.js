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

const passwordValidator = new Validator()
  .notBlank()
  .notNull()
  .minLength(6, errors.password.minLength)
  .maxLength(20, errors.password.minLength)
  .requireLowercase(errors.password.requiresLowercase)
  .requireUppercase(errors.password.requiresUppercase)
  .requireNumber(errors.password.requiresNumber)
  .requireSpecialCharacter(errors.password.requiresSpecialCharacter);

const userValidator = new SchemaValidator({
  name: nameValidator,
  lastname: nameValidator,
  email: emailValidator,
  password: passwordValidator,
});

function validateUser(user) {
  userValidator.validate(user);
}

module.exports = {
  userValidator,
  validateUser,
};
