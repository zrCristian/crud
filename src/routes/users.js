const { Router } = require('express');
const {
  profile, logout, updateView, update,
} = require('../controllers/users');

const router = Router();

router.post('/editar/:id', update);
router.post('/logout', logout);

router.get('/editar/:id', updateView);
router.get('/:id', profile);

module.exports = router;
