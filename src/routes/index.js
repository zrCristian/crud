const { Router } = require('express');
const {
  index,
  loginView,
  registerView,
  cart,
} = require('../controllers');
const { register, login } = require('../controllers/users');
const validateNewUser = require('../middlewares/validations/userValidation');
const validateLogin = require('../middlewares/validations/loginValidation');
const { isLogged } = require('../middlewares/security/isLogged');

const router = Router();

router.post('/registro', validateNewUser, register);
router.post('/login', validateLogin, login);

router.get('/login', isLogged, loginView);
router.get('/registro', isLogged, registerView);
router.get('/cart', cart);
router.get('/', index);

module.exports = router;
