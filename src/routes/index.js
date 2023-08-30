const { Router } = require('express');
const {
  index,
  loginView,
  registerView,
  cart,
} = require('../controllers');
const { register } = require('../controllers/users');
const validateNewUser = require('../middlewares/userValidation');

const router = Router();

router.post('/registro', validateNewUser, register);

router.get('/login', loginView);
router.get('/registro', registerView);
router.get('/cart', cart);
router.get('/', index);

module.exports = router;
