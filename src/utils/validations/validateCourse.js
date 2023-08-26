const { Validator, NumberValidator, SchemaValidator } = require('another-validator');
const { errors } = require('../constants');

function validateCourse(course) {
  console.log(course);

  const nameValidator = new Validator()
    .minLength(3, errors.minLengthName)
    .maxLength(100, errors.maxLengthName)
    .notEmpty(errors.minLengthName);

  const priceValidator = new NumberValidator()
    .isNonNegative(errors.negativePrice)
    .notNull();

  const durationValidator = new NumberValidator()
    .isNonNegative(errors.negativePrice);

  const courseValidator = new SchemaValidator({
    name: nameValidator,
    price: priceValidator,
    duration: durationValidator,
  });

  courseValidator.validate(course);
}

module.exports = validateCourse;
