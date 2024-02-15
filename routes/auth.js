// Auth Routes

const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController')
const auth = require('../middlewares/auth')

// Login Route
router.post('/login', controller.login)

// Register Route
router.post('/register', controller.register)

//Get Me Route
router.get('/me', auth.check, controller.me)

module.exports = router;
