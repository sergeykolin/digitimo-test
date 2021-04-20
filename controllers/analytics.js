const errorHandler = require('../utils/errorHandler');
const Review = require('../models/Review');

module.exports.analytics = async function (req, res) {
    const aggregate = [
        {$match: {}},
        {
            $group: {
                _id: "null",
                count: {$sum: 1},
                age_sum: {$sum: "$age"},
                rate_sum: {$sum: "$rating"},
                country: {$push: "$country"},
                male: {$sum: {$cond: {if: {$eq:["$gender", 1]}, then: 1, else: 0}}},
                female: {$sum: {$cond: {if: {$eq:["$gender", 2]}, then: 1, else: 0}}},
                indicated_age: {$sum: {$cond: {if: {$gt:["$age", 1]}, then: 1, else: 0}}},
                genders: {$push: {g: "$gender"}}
            }
        },
        {$unwind: "$country"},
        {
            $group: {
                _id: "$country",
                count: {$last: "$count"},
                age_sum: {$last: "$age_sum"},
                rate_sum: {$last: "$rate_sum"},
                male: {$last: "$male"},
                female: {$last: "$female"},
                indicated_age: {$last: "$indicated_age"},
                country_count: {$sum: 1}
            }
        },
        {
            $group: {
                _id: "null",
                countries: {$push: {name: "$_id", count: "$country_count"}},
                total: {$last: "$count"},
                age_sum: {$last: "$age_sum"},
                rate_sum: {$last: "$rate_sum"},
                male: {$last: "$male"},
                female: {$last: "$female"},
                indicated_age: {$last: "$indicated_age"},
            }
        },
        {
            $project: {
                countries: 1,
                total: 1,
                male: 1,
                female: 1,
                indicated_age: 1,
                average_age: {$round: [{ $divide: ["$age_sum", "$indicated_age" ] }, 2]},
                average_rating: {$round: [{ $divide: ["$rate_sum", "$total" ] }, 2]},
                without_gender: {$subtract: ["$total", {$sum: ["$male", "$female"]}]}
            }
        }
    ];

    try {
        const a = await Review.find();
        const result = await Review.aggregate(aggregate);
        if (result.length) delete result[0]._id;
        res.status(200).json({
            success: true,
            result: result[0]
        })
    } catch (error) {
        errorHandler(res, error);
    }

}