const Country = require('../models/Countries');
const errorHandler = require('../utils/errorHandler');

module.exports.getCountries = async function (req, res) {
    try {
        const countries = await Country.find();
        res.status(200).json(countries.map(item => {return {name: item.name}}))
    } catch (error) {
         errorHandler(res, error);
    }
}