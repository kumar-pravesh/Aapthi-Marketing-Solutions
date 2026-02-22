const express = require('express');
const router = express.Router();
const { login, getContacts, getCareers } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public route for login
router.post('/login', login);

// Protected routes
router.get('/contacts', authMiddleware, getContacts);
router.get('/careers', authMiddleware, getCareers);

module.exports = router;
