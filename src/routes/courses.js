const { Router } = require('express');
const multer = require('multer');
const {
  listAll,
  createView,
  create,
  getById,
} = require('../controllers/courses');

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
router.get('/crear', createView);
router.get('/:id', getById);

router.post('/crear', upload.single('image'), create);

module.exports = router;
