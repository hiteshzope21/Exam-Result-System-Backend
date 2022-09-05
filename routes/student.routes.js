
const express = require("express");
const studentController = require("../controllers/student.controller");
const validateStudentInfo = require("../middlewares/validateStudentReq");
const router = express.Router();

const checkToken = require("../middlewares/checkToken")

router.post('/resultsystem/api/students/add' ,  [ checkToken.isToken , validateStudentInfo.checkStudentInfoValidation ] ,  studentController.createStudentInfo);
router.get('/resultsystem/api/students',   [checkToken.isToken], studentController.getStudentDetails);
router.get('/resultsystem/api/students/:id', [checkToken.isToken], studentController.getStudentByID);
router.put('/resultsystem/api/students/:id', [checkToken.isToken],   studentController.updateStudentByID);
router.delete('/resultsystem/api/students/:id', [checkToken.isToken], studentController.deleteStudentByID);

module.exports = router;