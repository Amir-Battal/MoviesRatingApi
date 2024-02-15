// WatchList Routes

const express = require('express');
const router = express.Router();
const controller = require('../controllers/watchListController')
const auth = require('../middlewares/auth')

// Add WatchList Route
router.post('/', auth.check, controller.add)

// Delete WatchList Route
router.delete('/:movie', auth.check, controller.delete)

// Get WatchList Route
router.get('/', auth.check, controller.list)

module.exports = router;