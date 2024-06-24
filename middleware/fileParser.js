const multer = require("multer");

const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 5 * 1024 * 1024, files: 2 }, // 5 MB
});

module.exports = {
    upload
}