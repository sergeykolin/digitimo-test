const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const countryShema = new Shema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('countries', countryShema);