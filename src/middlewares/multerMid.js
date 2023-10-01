const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/courses');
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const upload = multer({ storage: storage });

module.exports = upload;