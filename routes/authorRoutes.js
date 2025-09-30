const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const { authenticate } = require('../middlewares/authMiddleware');

router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/', authenticate, authorController.createAuthor);

module.exports = router;