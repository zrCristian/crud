const bcrypt = require('bcryptjs');
const { saveUser, getUserByEmail, getUserById } = require('../data/users');
const { errors } = require('../utils/constants');
const NotFoundException = require('../errors/error');

function register(req, res) {
  console.log(req.errors);
  const user = req.body;
  saveUser(user);

  res.redirect('/login');
}

function login(req, res) {
  const loginData = req.body;

  const user = getUserByEmail(loginData.email);

  if (user && bcrypt.compareSync(loginData.password, user.password)) {
    req.session.userMail = user.email;
    res.redirect('/');
  } else {
    res.render('login', {
      errors: {
        login: [errors.login],
      },
    });
  }
}

function profile(req, res, next) {
  const id = +req.params.id;
  try {
    const user = getUserById(id);

    res.render('users/profile', { user });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  register,
  login,
  profile,
};
