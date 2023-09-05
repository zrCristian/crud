const { Router } = require('express');
const {
  profile, logout, updateView, update, deleteUserById,
} = require('../controllers/users');

const router = Router();

router.post('/editar/:id', update);
router.post('/eliminar/:id', deleteUserById);
router.post('/logout', logout);

router.get('/editar/:id', updateView);
router.get('/:id', profile);

module.exports = router;
