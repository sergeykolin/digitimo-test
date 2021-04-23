const Review = require('../models/Review');

module.exports.addReview = async function (req, res, next) {
    const review = new Review(req.body);
    if (!review.name || !review.email || !review.rating) {
        next(new Error('Bad Request'))
    }
    try {
        await review.save();
        res.status(200).json({
            success: true
        });
    } catch (error) {
        next(error)
    }
}