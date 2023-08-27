function index(req, res) {
  res.render('index');
}

function loginView(req, res) {
  res.render('login');
}

module.exports = {
  index,
  loginView,
};
