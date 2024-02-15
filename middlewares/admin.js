// Admin Check MiddleWare

const User = require('../models/user')

// Check
exports.check = async (req, res, next) => {
    const user = await User.findById(req.UserId);
    user?.isAdmin ? next() : res.status(403).json({ message: 'Forbidden' })
    // next()
}