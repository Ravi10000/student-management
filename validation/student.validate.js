const joi = require('joi')

const studentValidationSchema = joi.object({
    studentData: joi
      .object({
        name: joi
          .string()
          .pattern(/^[A-Za-z ]+$/)
          .required(),
        age: joi
          .string()
          .pattern(/^[0-9]{2}$/)
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
        address: joi.string().required(),
      })
      .required(),
  });

module.exports = studentValidationSchema