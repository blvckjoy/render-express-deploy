const Joi = require("joi");

function validateUser(user) {
   const schema = Joi.object({
      name: Joi.string().min(3).required(),
   });
   return schema.validate(user);
}

module.exports = { validateUser };
