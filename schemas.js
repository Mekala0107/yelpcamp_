const Joi = require('joi');

module.exports.campgroundSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().min(0).required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
    images: Joi.array().items(
        Joi.object({
            url: Joi.string().uri().required(),
            filename: Joi.string().required()
        })
    ).optional() // Allow images but don’t require them
}).required();

module.exports.reviewSchema = Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    body: Joi.string().required()
}).required();








