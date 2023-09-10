const jwt = require('jsonwebtoken');
const { isJWT } = require('another-validator');
const { secrets } = require('../../config/env');
const { getUserById } = require('../../data/users');
const setSessionWithUserData = require('../../utils/security/setSession');
const { cookieKey } = require('../../config/constants');

function getTokenData(jwtToken, attributeName) {
  const isValidJwt = isJWT(jwtToken);

  if (!isValidJwt) {
    throw new Error(`invalid token ${jwtToken}`);
  }

  try {
    const token = jwt.verify(jwtToken, secrets.JWT_SECRET);
    return token[attributeName];
  } catch (e) {
    throw new Error(`invalid token ${jwtToken}`);
  }
}

function cookieCheck(req, res, next) {
  if (req.session.userId === undefined
    && req.cookies.user !== undefined) {
    try {
      const jwtToken = req.cookies.user;

      const userId = getTokenData(jwtToken, cookieKey.user);
      const user = getUserById(userId);
      setSessionWithUserData(req, user);
    } catch (e) {
      res.clearCookie('user');
      res.session.destroy();
      throw e;
    }
  }

  next();
}

module.exports = cookieCheck;
