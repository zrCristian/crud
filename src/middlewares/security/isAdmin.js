const UnauthorizedException = require('../../errors/notAllowedException');

function isAdmin(req, res, next) {
  if (!req.session.isAdmin) {
    next(new UnauthorizedException());
  }

  next();
}

module.exports = isAdmin;
