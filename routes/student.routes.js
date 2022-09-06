const express = require('express');
const {index, register, getStudentById} = require('../controllers/student.controllers')

const router = express.Router();

router.post('/', register)
router.get('/:id', getStudentById)
router.get('/', index)

module.exports = router