const loginValidator = require('../utils/validations/loginValidation');

function validateLogin(req, res, next) {
  const loginData = req.body;

  try {
    loginValidator.validate(loginData);
  } catch (e) {
    const errors = loginValidator.getErrors(loginData);
    console.log(errors);
    res.render('login', {
      errors,
    });

    return;
  }

  next();
}

module.exports = validateLogin;
