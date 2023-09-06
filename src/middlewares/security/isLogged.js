function isLogged(req, res, next) {
  if (req.session.userId) {
    res.redirect('/');
  } else {
    next();
  }
}

function isNotLogged(req, res, next) {
  if (!req.session.userId) {
    res.redirect('/login');
  } else {
    next();
  }
}

module.exports = {
  isNotLogged,
  isLogged,
};
