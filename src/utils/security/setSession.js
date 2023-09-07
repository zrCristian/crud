function setSessionWithUserData(req, user) {
  req.session.userId = user.id;
  req.session.isAdmin = user.isAdmin;
}

module.exports = setSessionWithUserData;
