const { Validator, SchemaValidator } = require('another-validator');
const { errors } = require('../../config/constants');

const emailValidator = new Validator()
  .isEmail(errors.isEmail)
  .notBlank(errors.notBlank);

const passwordValidator = new Validator()
  .notBlank(errors.notBlank);

const loginValidator = new SchemaValidator({
  email: emailValidator,
  password: passwordValidator,
});

module.exports = loginValidator;
