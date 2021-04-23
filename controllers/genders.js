const Gender = require('../models/Genders');

module.exports.genders = async function (req, res) {
    try {
        const genders = await Gender.find();
        res.status(200).json(genders.map(item => {return {name: item.name, type: item.type}}))
    } catch (error) {
         next(error);
    }
}