const BaseHTTPException = require('./baseHTTPException');

class NotFoundException extends BaseHTTPException {
  constructor(message) {
    super(message, 404);
  }
}

module.exports = NotFoundException;
