
const express = require("express");
const studentController = require("../controllers/student.controller");
const router = express.Router();


router.get("/resultsystem/api/students/results/:enrollment", studentController.getResultByEnrollment);

module.exports = router;
