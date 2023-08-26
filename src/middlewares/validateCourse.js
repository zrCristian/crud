const validate = require('../utils/validations/validateCourse');

function validateCourse(req, res, next) {
  try {
    const course = req.body;
    course.price = +course.price;

    validate(course);
    next();
  } catch (e) {
    const { errors } = e;
    const error = {
      name: errors.name,
      price: errors.price,
      duration: errors.duration,
    };
    res.render('courses/create', { error });
  }
}

module.exports = validateCourse;
