const BaseHTTPException = require('./baseHTTPException');

class UnauthorizedException extends BaseHTTPException {
  constructor(message) {
    super(message, 401);
  }
}

module.exports = UnauthorizedException;
