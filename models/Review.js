const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const reviewShema = new Shema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: ''
    },
    gender: {
        type: Number,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    orign_page: {
        type: String,
        default: ''
    },
    note: {
        type: String,
        default: ''
    },
    created_at: {
        type: Number,
        default: new Date().valueOf()
    }

});

module.exports = mongoose.model('reviews', reviewShema);