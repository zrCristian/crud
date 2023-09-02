function isLogged(req, res, next) {
  if (req.session.userMail) {
    res.redirect('/');
  } else {
    next();
  }
}

function isNotLogged(req, res, next) {
  if (!req.session.userMail) {
    res.redirect('/login');
  } else {
    next();
  }
}

module.exports = {
  isNotLogged,
  isLogged,
};
