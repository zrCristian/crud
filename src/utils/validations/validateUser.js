const { Validator, NumberValidator, SchemaValidator } = require('another-validator');
const { errors } = require('../constants');

function validateUser(course) {
  const nameValidator = new Validator()
    .minLength(3, errors.courses.minLengthName)
    .maxLength(100, errors.courses.maxLengthName)
    .notEmpty(errors.courses.minLengthName);

  const priceValidator = new NumberValidator()
    .isNonNegative(errors.courses.negativePrice)
    .notNull();

  const durationValidator = new NumberValidator()
    .isNonNegative(errors.courses.negativePrice);

  const courseValidator = new SchemaValidator({
    name: nameValidator,
    price: priceValidator,
    duration: durationValidator,
  });

  courseValidator.validate(course);
}

module.exports = validateUser;
