// Auth Check Middleware

const jwtHelpers = require('../utils/jwtHelpers')

// Check
exports.check = (req, res, next) => {
    let token  = req.headers['authorization']
    // Authorization: Bearer token...
    token = token?.replace('Bearer', '')?.trim()
    const payload = jwtHelpers.verify(token)
    if (payload) {
        req.userId = payload.sub
        return next()
    }
    res.status(401).json({
        message: 'Unauthorized!'
    })
}