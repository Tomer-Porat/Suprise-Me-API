const Joi = require('joi');

function isValidInput(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    birth_year: Joi.number().integer().min(1900).max(2021).required()
  });
  
  const validation  = schema.validate({ name: req.query.name, birth_year: req.query.birth_year});
  if(validation.error) return res.status(400).send(validation.error.details[0].message);
  next();
}

module.exports = isValidInput;