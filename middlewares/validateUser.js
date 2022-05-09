const Joi = require('joi');

const validateUser = (req, _res, next) => {
    const { error } = Joi.object({
        displayName: Joi.string().min(8).required(),
        email: Joi.string().email().required(),
        password: Joi.string().length(6).required(),
        image: Joi.string(),
    }).validate(req.body);

    if (error) next(error);

    next();
};

module.exports = validateUser;
