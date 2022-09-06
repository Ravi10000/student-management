const joi = require("joi");
const Student = require("../models/student.model");

module.exports.index = async (req, res) => {
  try {
    const studentsList = await Student.find({});
    res.send({ studentsList });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    // id length exceeded
    if (id.length !== 24) {
      res.send({ notFound: true });
      return;
    }
    const student = await Student.findById(id);
    if (!student) {
      res.send({ notFound: true });
      return;
    }
    res.send({ student });
  } catch (error) {
    console.log(error);
  }
};

module.exports.register = async (req, res) => {
  try {
    const studentValidationSchema = joi.object({
      studentData: joi
        .object({
          name: joi.string().required(),
          age: joi
            .string()
            .pattern(/^[0-9]{2}$/)
            .required(),
          email: joi.string().required(),
          phone: joi
            .string()
            .length(10)
            .pattern(/^[0-9]+$/)
            .required(),
          address: joi.string().required(),
        })
        .required(),
    });
    const result = studentValidationSchema.validate(req.body);
    if (result.error) {
      res.send({ error: result.error });
      return;
    }

    const newStudent = new Student({ ...req.body.studentData });
    await newStudent.save();
    res.send({ studentId: newStudent._id });
  } catch (error) {
    console.log(error);
  }
};
