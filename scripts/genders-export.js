const mongoose = require('mongoose');
const Gender = require('../models/Genders');
const Log = require('../libs/log');
const keys = require('../config/keys');

const genders = [
    {name: 'male', type: 1},
    {name: 'female', type: 2}
];

const importGenders = async function () {
    try {
        await Gender.insertMany(genders);
        Log('Data import was successful.')
        process.exit(0);
    } catch (error) {
        Log(error);
        process.exit(1);
    }
};

mongoose.connect(keys.mongodbURL)
    .then(() => {
        Log('MongoDB connected.');
        importGenders();
    })
    .catch(error => Log(error));
