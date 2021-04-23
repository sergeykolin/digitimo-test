const Country = require('../models/Countries');

module.exports.getCountries = async function (req, res, next) {
    try {
        const countries = await Country.find();
        res.status(200).json(countries.map(item => {return {name: item.name}}))
    } catch (error) {
         next(error);
    }
}