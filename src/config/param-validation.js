const Joi = require('joi');

export default {
  // POST /accounts
  createUserGroup: {
    body: {
      name: Joi.string().required(),
    },
  },
};
