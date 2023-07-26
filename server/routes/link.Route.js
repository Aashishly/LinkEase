const express = require('express');
const router = express.Router();
const linkController = require('../controllers/Link.Controller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/shorten', authMiddleware, linkController.shortenLink);
router.get('/:shortCode', linkController.redirecttolink);

module.exports = router;