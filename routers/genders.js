const express = require('express');
const controller = require('../controllers/genders');
const router = express.Router();

router.get('/', controller.genders);


module.exports = router;