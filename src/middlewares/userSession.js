function setSessionData(req, res, next) {
  res.locals.userId = req.session.userId;
  res.locals.isAdmin = req.session.isAdmin;

  next();
}

module.exports = setSessionData;
