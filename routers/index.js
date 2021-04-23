const express = require('express');
const router = express.Router();
const reviewsRouter = require('./reviews');
const analyticsRouter = require('./analytics');
const gendersRouter = require('./genders');
const countriesRouter = require('./countries');

router.use('/', reviewsRouter);
router.use('/analytics', analyticsRouter);
router.use('/genders', gendersRouter);
router.use('/countries', countriesRouter);

module.exports = router;