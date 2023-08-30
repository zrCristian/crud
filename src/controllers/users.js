const { saveUser, getUserByEmail } = require('../data/users');

function register(req, res) {
  console.log(req.errors);
  const user = req.body;
  saveUser(user);

  res.redirect('/login');
}

function login(req, res) {
  const loginData = req.body;

  const user = getUserByEmail(loginData.email);

  if (user.password === loginData.password) {
    console.log('inicia sesión');
  } else {
    console.log('no inicia sesión');
  }

  res.redirect('/');
}

module.exports = {
  register,
  login,
};
