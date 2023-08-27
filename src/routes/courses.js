const { Router } = require('express');
const {
  listAll,
  createView,
  create,
  getById,
} = require('../controllers/courses');

const router = Router();

router.get('/', listAll);

module.exports = router;
