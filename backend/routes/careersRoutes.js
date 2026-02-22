const express = require('express');
const router = express.Router();
const careersController = require('../controllers/careersController');
const upload = require('../middlewares/uploadMiddleware');

// GET /api/careers (list open positions)
router.get('/', careersController.getCareers);

// POST /api/careers/upload (upload resume)
router.post('/upload', upload.single('resume'), careersController.uploadResume);

module.exports = router;
