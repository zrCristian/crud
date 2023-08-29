const { Router } = require('express');
const {
  index,
  loginView,
  registerView,
  cart,
} = require('../controllers');

const router = Router();

router.get('/login', loginView);
router.get('/registro', registerView);
router.get('/cart', cart);
router.get('/', index);

module.exports = router;
