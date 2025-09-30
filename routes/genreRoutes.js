const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');
const { authenticate } = require('../middlewares/authMiddleware');

router.get('/', genreController.getAllGenres);
router.post('/', authenticate, genreController.createGenre);

module.exports = router;