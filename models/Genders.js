const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const genderShema = new Shema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: Number,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('genders', genderShema);