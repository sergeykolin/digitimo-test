const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const router = require('./routers/index');
const Log = require('./libs/log');
const keys = require('./config/keys');
const errorHandler = require('./utils/errorHandler');

mongoose.connect(keys.mongodbURL)
    .then(() => Log('MongoDB connected.'))
    .catch(error => Log(error));

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
app.use( (err, req, res, next) => {
    next(errorHandler(res, err, err.status));
});

module.exports = app;