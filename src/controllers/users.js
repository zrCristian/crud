const bcrypt = require('bcryptjs');
const {
  saveUser, getUserByEmail, getUserById, deleteUser,
} = require('../data/users');
const { errors } = require('../utils/constants');
const UnauthorizedException = require('../errors/notAllowedException');
const setSessionWithUserData = require('../utils/security/setSession');

const keepUserLoggedCookie = 'user';

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
      res.cookie(keepUserLoggedCookie, user.id, {
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
  res.clearCookie(keepUserLoggedCookie);

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

function deleteUserById(req, res) {
  const userId = +req.params.id;

  if (userId !== req.session.userId && !req.session.isAdmin) {
    throw new UnauthorizedException();
  }

  req.session.userId = null;
  req.session.isAdmin = null;

  deleteUser(userId);

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
