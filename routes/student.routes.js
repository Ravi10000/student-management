const express = require("express");
const {
  index,
  register,
  getStudentById,
} = require("../controllers/student.controllers");

const router = express.Router();

router.get("/:id", getStudentById);

router.route("/")
      .get(index)
      .post(register)

module.exports = router;
