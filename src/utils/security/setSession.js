function setSessionWithUserData(req, user) {
  req.session.userId = user.id;
  req.session.isAdmin = user.role.name === 'Admin';
}

module.exports = setSessionWithUserData;
