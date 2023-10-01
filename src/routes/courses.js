const { Router } = require('express');
const upload = require('../middlewares/multerMid');
const {
  listAll,
  createView,
  create,
  getById,
  deleteCourse,
  deleteCourseLib,
  editarView,
  editar
} = require('../controllers/courses');

const router = Router();

router.get('/', listAll);
router.get('/crear', createView);
router.get('/editar/:id', editarView);

router.get('/:id', getById);

router.post('/', upload.single('image'), create);
router.post('/eliminar/:id', deleteCourse);

router.put('/editar/:id', upload.single('image'), editar);


router.delete('/eliminar-libreria/:id', deleteCourseLib);
 
module.exports = router;
