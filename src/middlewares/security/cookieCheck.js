const { getUserById } = require('../../data/users');
const setSessionWithUserData = require('../../utils/security/setSession');

function cookieCheck(req, res, next) {
  if (req.session.userId === undefined
    && req.cookies.user !== undefined) {
    const user = getUserById(+req.cookies.user);
    setSessionWithUserData(req, user);
  }

  next();
}

module.exports = cookieCheck;
