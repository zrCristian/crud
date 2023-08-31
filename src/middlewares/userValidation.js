const { buildValidator } = require('../utils/validations/validateUser');

function validateNewUser(req, res, next) {
  const user = req.body;
  const validator = buildValidator(user);

  try {
    validator.validate();
  } catch (e) {
    res.render('register', {
      errors: validator.getErrors(user),
    });

    return;
  }

  next();
}

module.exports = validateNewUser;
