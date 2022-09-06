// model
const Student = require("../models/student.model");

// validation schema
const studentValidationSchema = require("../validation/student.validate");

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
    const result = studentValidationSchema.validate(req.body);
    if (result.error) {
      res.send(result.error.details);
      return;
    }

    const newStudent = new Student({ ...req.body.studentData });
    await newStudent.save();
    res.send({ studentId: newStudent._id });
  } catch (error) {
    console.log(error);
  }
};
