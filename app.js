const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const reviewsRouter = require('./routers/reviews');
const analyticsRouter = require('./routers/analytics');
const gendersRouter = require('./routers/genders');
const countriesRouter = require('./routers/countries');
const Log = require('./libs/log');
const keys = require('./config/keys');

mongoose.connect(keys.mongodbURL)
    .then(() => Log('MongoDB connected.'))
    .catch(error => Log(error));

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', reviewsRouter);
app.use('/analytics', analyticsRouter);
app.use('/genders', gendersRouter);
app.use('/countries', countriesRouter);

module.exports = app;