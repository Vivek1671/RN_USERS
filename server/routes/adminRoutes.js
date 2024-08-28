const express = require('express');
const { AdminLogin } = require('../controllers/adminController');

const router = express.Router();

router.post('/login', AdminLogin);

module.exports = router;
