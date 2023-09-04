const bcrypt = require('bcryptjs');
const { saveUser, getUserByEmail, getUserById } = require('../data/users');
const { errors } = require('../utils/constants');
const UnauthorizedException = require('../errors/notAllowed');

function register(req, res) {
  const user = req.body;
  saveUser(user);
  req.session.accountCreated = true;

  res.redirect('/login');
}

function login(req, res) {
  const loginData = req.body;

  const user = getUserByEmail(loginData.email);

  if (user && bcrypt.compareSync(loginData.password, user.password)) {
    req.session.userId = user.id;
    req.session.isAdmin = user.isAdmin;

    res.redirect('/');
  } else {
    res.render('login', {
      errors: {
        login: [errors.login],
      },
    });
  }
}

function logout(req, res) {
  req.session.userId = undefined;
  req.session.isAdmin = undefined;

  res.redirect('/');
}

function profile(req, res, next) {
  const id = +req.params.id;
  try {
    if (id !== req.session.userId && !req.session.isAdmin) {
      throw new UnauthorizedException();
    }

    const user = getUserById(id);

    res.render('users/profile', { user });
  } catch (e) {
    next(e);
  }
}

function updateView(req, res) {
  res.render('users/edit');
}

function update(req, res) {
  res.redirect('/usuarios/1');
}

module.exports = {
  register,
  login,
  profile,
  logout,
  updateView,
  update,
};
