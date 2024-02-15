// Movie Routes

const express = require('express');
const router = express.Router();
const controller = require('../controllers/moviesController')
const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

// Create Movie Route
router.post('/', [auth.check, admin.check], controller.create)

// Update Movie Route
router.put('/:id', [auth.check, admin.check], controller.update)

// Delete Movie Route
router.delete('/:id', [auth.check, admin.check], controller.delete)


// Get All Movies List Route
router.get('/', auth.check, controller.list)

// Find Movie Route
router.get('/:id', auth.check, controller.find)


// Reviews
// Add Review Route
router.post('/:id/reviews', auth.check, controller.addReview)

// Get All Reviews Route
router.get('/:id/reviews', auth.check, controller.reviews)

module.exports = router;
