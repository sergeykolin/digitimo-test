const express = require('express');
const controller = require('../controllers/reviews');
const router = express.Router();

router.post('/review', controller.addReview);


module.exports = router;