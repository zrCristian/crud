const { buildValidator } = require('../utils/validations/validateUser');

function validateNewUser(req, res, next) {
  const user = req.body;
  const validator = buildValidator(user);
  const isNewUserValid = validator.isValid(user);

  if (isNewUserValid) {
    next();
    return;
  }

  res.render('register', {
    errors: validator.getErrors(user),
  });
}

module.exports = validateNewUser;
