const express = require('express');

const appRouter = require('./routes');
const { uploadLimiter } = require('./middleware');
const app = express();

app.use(express.json());
app.use(uploadLimiter);

app.use("/", appRouter);

// app.post('/upload', uploadLimiter, upload.array('files'), (req, res) => {
//     const files = req.files;

//     queue.push({ files }, (error, result) => {
//         if (error) {
//             res.status(500).json({ message: 'Internal server error.', error: error.message });
//         } else {
//             res.status(200).json(result);
//         }
//     });
// });

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message || 'Internal Server Error' });
});

app.listen(3010, () => {
    console.log('Server started on port 3010');
});
