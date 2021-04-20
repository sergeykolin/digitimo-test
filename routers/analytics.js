const express = require('express');
const controller = require('../controllers/analytics');
const router = express.Router();

router.get('/', controller.analytics);


module.exports = router;