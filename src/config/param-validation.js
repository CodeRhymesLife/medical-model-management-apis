const Joi = require('joi');

export default {
  // POST /accounts
  createAccount: {
    body: {
      name: Joi.string().required(),
    },
  },
};
