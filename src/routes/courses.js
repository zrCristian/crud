const { Router } = require('express');
const multer = require('multer');
const {
  listAll,
  createView,
  create,
  getById,
  editView,
  edit,
  deleteById,
} = require('../controllers/courses');
const isAdmin = require('../middlewares/security/isAdmin');
const validateCourse = require('../middlewares/courseValidation');

const router = Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images/courses');
  },
  filename(req, file, cb) {
    const extension = file.originalname.split('.')[1];
    cb(null, `${file.fieldname}-${new Date().getTime()}.${extension}`);
  },
});

const upload = multer({ storage });

router.get('/', listAll);
router.get('/crear', isAdmin, createView);
router.get('/editar/:id', isAdmin, editView);
router.get('/:id', getById);

router.post('/crear', isAdmin, upload.single('image'), validateCourse, create);
router.post('/editar/:id', isAdmin, upload.single('image'), validateCourse, edit);
router.post('/eliminar/:id', isAdmin, deleteById);

module.exports = router;
