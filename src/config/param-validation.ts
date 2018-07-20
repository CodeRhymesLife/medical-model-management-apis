const Joi = require('joi');

export default {
    // POST /meshs
    createMesh: {
        body: {
            name: Joi.string().required(),
        },
    },
};
