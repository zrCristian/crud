const { Validator, NumberValidator, SchemaValidator } = require('another-validator');
const { errors } = require('../constants');

const nameValidator = new Validator()
  .minLength(3, errors.minLengthName)
  .maxLength(100, errors.maxLengthName)
  .notEmpty(errors.minLengthName);

const priceValidator = new NumberValidator()
  .isNonNegative(errors.negativeNumber)
  .notNull(errors.notBlank);

const durationValidator = new NumberValidator()
  .notNull(errors.notBlank)
  .isNonNegative(errors.negativeNumber);

function buildCourseValidator() {
  return new SchemaValidator({
    name: nameValidator,
    price: priceValidator,
    duration: durationValidator,
  });
}

module.exports = buildCourseValidator;
