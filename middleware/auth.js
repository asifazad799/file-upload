const authCheck = (req, res, next) => {
    // for now pass all req
    next();
}

module.exports = { authCheck }