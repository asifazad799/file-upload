const express = require('express');
const multer = require('multer');
const rateLimit = require('express-rate-limit');

const { queue } = require('./scannerQueue')

const app = express();
app.use(express.json());

const upload = multer({
    dest: 'uploads/',
    // limits: { fileSize: 5 * 1024 * 1024, files: 2 }, // 5 MB
});

const uploadLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: 'Too many upload requests from this IP, please try again later.'
});

app.post('/upload', uploadLimiter, upload.array('files'), (req, res) => {
    const files = req.files;

    queue.push({ files }, (error, result) => {
        if (error) {
            res.status(500).json({ message: 'Internal server error.', error: error.message });
        } else {
            res.status(200).json(result);
        }
    });
});

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message || 'Internal Server Error' });
});

app.listen(3010, () => {
    console.log('Server started on port 3010');
});
