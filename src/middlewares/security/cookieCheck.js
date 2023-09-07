const { getUserById } = require('../../data/users');

function cookieCheck(req, res, next) {
  if (req.cookies.user !== undefined) {
    const user = getUserById(+req.cookies.user);
    req.session.userId = user.id;
    req.session.isAdmin = user.isAdmin;
  }

  next();
}

module.exports = cookieCheck;
