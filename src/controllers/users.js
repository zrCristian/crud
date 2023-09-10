const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  saveUser,
  getUserByEmail,
  getUserById,
  deleteUser,
} = require('../data/users');
const { errors, cookieKey } = require('../config/constants');
const setSessionWithUserData = require('../utils/security/setSession');
const isUserAllowed = require('../utils/security/validateUserPermission');
const { secrets } = require('../config/env');

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
    if (loginData.keepLogged) {
      const token = jwt.sign({ userId: user.id }, secrets.JWT_SECRET);

      res.cookie(cookieKey.user, token, {
        maxAge: 1000 * 60 * 60 * 24,
      });
    }

    setSessionWithUserData(req, user);

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
  req.session.destroy();
  res.clearCookie(cookieKey.user);

  res.redirect('/');
}

function profile(req, res, next) {
  const userId = +req.params.id;
  try {
    isUserAllowed(req.session, userId);

    const user = getUserById(userId);

    res.render('users/profile', { user });
  } catch (e) {
    next(e);
  }
}

function deleteUserById(req, res) {
  const userId = +req.params.id;

  isUserAllowed(req.session, userId);
  deleteUser(userId);

  if (req.session.userId === userId) {
    req.session.destroy();
    res.clearCookie(cookieKey.user);
  }

  res.redirect('/');
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
  deleteUserById,
  update,
};
