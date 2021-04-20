const express = require('express');
const controller = require('../controllers/countries');
const router = express.Router();

router.get('/', controller.getCountries);


module.exports = router;