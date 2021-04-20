const Review = require('../models/Review');
const errorHandler = require('../utils/errorHandler');

module.exports.addReview = async function (req, res) {
   const review = new Review(req.body);
   if (!review.name || !review.email || !review.rating) {
       errorHandler(res, 'Bad Request', 400);
       return;
   }
   try {
       await review.save();
       res.status(200).json({
           success: true
       })
   } catch (error) {
        errorHandler(res, error);
   }
}