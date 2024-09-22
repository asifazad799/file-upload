const loginRoute = require('express').Router();

loginRoute.post('/login', async (req, res) => {
    res.status(200).json({ message: '#TODO log-in' })
})

module.exports = loginRoute
