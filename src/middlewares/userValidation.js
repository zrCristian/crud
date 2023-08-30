const { errors } = require('../utils/constants');
const { validateUser, userValidator } = require('../utils/validations/validateUser');

function validateNewUser(req, res, next) {
  const doPasswordMatch = req.body.password === req.body.passwordConfirmation;

  userValidator
    .schema
    .password
    .addRule(() => doPasswordMatch, errors.password.confirmation);

  try {
    validateUser(req.body);
  } catch (e) {
    res.render('register', {
      errors: userValidator.getErrors(req.body),
    });

    return;
  }

  next();
}

module.exports = validateNewUser;
