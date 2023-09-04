function index(req, res) {
  res.render('index');
}

function loginView(req, res) {
  const hasCreatedNewAccount = req.session?.accountCreated || false;

  if (hasCreatedNewAccount) {
    res.locals.accountCreated = true;
    req.session.accountCreated = null;
  }

  res.render('login');
}

function registerView(req, res) {
  res.render('register');
}

function cart(req, res) {
  res.render('cart');
}

module.exports = {
  index,
  loginView,
  registerView,
  cart,
};
