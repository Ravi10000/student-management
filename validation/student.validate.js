const joi = require("joi");

const studentValidationSchema = joi.object({
  studentData: joi
    .object({
      name: joi
        .string()
        .pattern(/^[A-Za-z ]+$/)
        .required(),
      age: joi
        .string()
        .pattern(/^[1-9]{1}[0-9]{0,1}$/)
        .required(),
      email: joi
        .string()
        .pattern(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        .required(),
      phone: joi
        .string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
      address: joi
        .string()
        // .pattern(/^[a-zA-Z0-9\s,.'"- ]*$/)
        .required(),
    })
    .required(),
});

module.exports = studentValidationSchema;
