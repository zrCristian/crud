const UnauthorizedException = require('../../errors/notAllowedException');

function isUserAllowed(session, requestId) {
  if (requestId !== session.userId && !session.isAdmin) {
    throw new UnauthorizedException();
  }
}

module.exports = isUserAllowed;
