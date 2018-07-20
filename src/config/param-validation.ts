const Joi = require('joi');

export default {
    // POST /meshs
    createMesh: {
        body: {
            name: Joi.string().required(),
            shortDesc: Joi.string(),
            longDesc: Joi.string(),
        },
    },

    // PUT /meshs
    updateMesh: {
        body: Joi.object().keys({
            name: Joi.string(),
            shortDesc: Joi.string(),
            longDesc: Joi.string(),
        }).or('name', 'shortDesc', 'longDesc'),
    },
};
