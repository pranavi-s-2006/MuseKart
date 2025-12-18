const express = require('express');
const { registerUser, authUser } = require('../controller/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);

module.exports = router;