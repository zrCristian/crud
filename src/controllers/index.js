function index(req, res) {
  res.render('index');
}

function loginView(req, res) {
  res.render('login');
}

function registerView(req, res) {
  res.render('register');
}

module.exports = {
  index,
  loginView,
  registerView,
};
