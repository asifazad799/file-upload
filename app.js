const express = require('express');

const appRouter = require('./module');
const { rateLimiter } = require('./middleware');
const { connectToDatabase } = require('./services');
const app = express();

connectToDatabase();

app.use(express.json());
app.use(rateLimiter);

app.use("/", appRouter);

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message || 'Internal Server Error' });
});

app.listen(3010, () => {
    console.log('Server started on port 3010');
});
