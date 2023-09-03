const buildCourseValidator = require('../utils/validations/validateCourse');

function validateCourse(req, res, next) {
  const route = req.path;
  const courseValidator = buildCourseValidator();

  const view = route.includes('crear') ? 'courses/create' : 'courses/edit';

  let price = null;
  let duration = null;

  if (req.body.price !== '') {
    price = +req.body.price;
  }

  if (req.body.duration !== '') {
    duration = +req.body.duration;
  }

  const course = {
    name: req.body.name,
    description: req.body.description,
    price,
    duration,
  };

  const isCourseValid = courseValidator.isValid(course);

  if (isCourseValid) {
    next();
    return;
  }

  res.render(view, {
    errors: courseValidator.getErrors(course),
    courseWithErrors: course,
  });
}

module.exports = validateCourse;
