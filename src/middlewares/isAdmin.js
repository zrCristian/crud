const UnauthorizedException = require('../errors/notAllowed');

function isAdmin(req, res, next) {
  if (!req.session.isAdmin) {
    next(new UnauthorizedException());
  }

  next();
}

module.exports = isAdmin;
