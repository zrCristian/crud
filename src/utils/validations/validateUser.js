const {
  Validator,
  SchemaValidator,
  isEmail,
} = require('another-validator');
const { errors } = require('../../config/constants');

const nameValidator = new Validator()
  .notNull(errors.notNull)
  .notBlank(errors.notBlank)
  .minLength(3, errors.users.minLengthName)
  .maxLength(100, errors.courses.maxLengthName)
  .notEmpty(errors.courses.minLengthName);

function buildEmailValidator() {
  return new Validator()
    .notBlank(errors.notBlank)
    .isEmail(errors.isEmail)
    .notNull(errors.notNull)
    .addRule((email) => isEmail(email))
    .addRule(
      (email) =>
      // const isUnique = usersData.find((u) => u.email === email) === undefined;

        true,
      errors.users.uniqueEmail,
    );
}

function buildPasswordValidator(user) {
  return new Validator()
    .notBlank(errors.notBlank)
    .notNull(errors.notNull)
    .minLength(6, errors.password.minLength)
    .maxLength(20, errors.password.minLength)
    .requireLowercase(errors.password.requiresLowercase)
    .requireUppercase(errors.password.requiresUppercase)
    .requireNumber(errors.password.requiresNumber)
    .requireSpecialCharacter(errors.password.requiresSpecialCharacter)
    .addRule((p) => p === user.passwordConfirmation, errors.password.confirmation);
}

function buildValidator(user) {
  const userValidator = new SchemaValidator({
    name: nameValidator,
    lastname: nameValidator,
    email: buildEmailValidator(),
    password: buildPasswordValidator(user),
  });

  return userValidator;
}

module.exports = {
  buildValidator,
};
