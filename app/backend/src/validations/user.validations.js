const joi = require('joi');

const userSchema = joi.object({
  email: joi.string().email().required().messages({
    'any.required': '"email" is required',
    'string.email': '"email" must be a valid email',
  }),
  password: joi.string().min(6).required().messages({
    'any.required': '"password" is required',
    'string.min': '"password" length must be at least 6 characters long',
  }),
});

const userValidate = (params) => {
  const { error } = userSchema.validate(params);
  if (error) {
    return { type: 400, message: error.message };
  }
  return { type: null, message: '' };
};

module.exports = userValidate;
