/**
 *  This file contains the Custom Middleewares
 */

const User = require("../models/student.model");

checkStudentInfoValidation = async (req, res, next) => {
  const data = req.body;

  /** validation for user Name  */
  if (!data.name) {
    return res.status(400).send({
      message: "Name is Not Provided !",
    });
  }

  /** validation for Father Name  */
  if (!data.fathername) {
    return res.status(400).send({
      message: "FatherName is Not Provided !",
    });
  }

  /** Check if the email is present  */
  const email = await User.findOne({ email: req.body.email });

  if (email != null) {
    return res.status(400).send({
      message: "User with Email already exist",
    });
  }

  /** validation for Email  */
  if (!data.name) {
    return res.status(400).send({
      message: "EmailID is Not Provided !",
    });
  }


  /** validation for user Name  */
  if (!data.semester) {
    return res.status(400).send({
      message: "semester is Not Provided !",
    });
  }

   /** Check if the email is present  */
   const enrollment = await User.findOne({  enrollment: req.body.enrollment });

   if (enrollment != null) {
     return res.status(400).send({
       message: "Enrollment already exist",
     });
   }


  /** validation for user Name  */
  if (!data.enrollment) {
    return res.status(400).send({
      message: "enrollment is Not Provided !",
    });
  }

  /** validation for user Name  */
  if (!data.course) {
    return res.status(400).send({
      message: "Course is Not Provided !",
    });
  }


  /** validation for user Name  */
  if (!data.mobile) {
    return res.status(400).send({
      message: "mobile is Not Provided !",
    });
  }

  /** validation for user Name  */
  if (!data.college) {
    return res.status(400).send({
      message: "college is Not Provided !",
    });
  }

 /** validation for user Name  */
  if (!data.subject01) {
    return res.status(400).send({
      message: "subject01 is Not Provided !",
    });
  } 
 /** validation for user Name  */
  if (!data.subject02) {
    return res.status(400).send({
      message: "subject02 is Not Provided !",
    });
  } 
 /** validation for user Name  */
  if (!data.subject03) {
    return res.status(400).send({
      message: "subject03 is Not Provided !",
    });
  } 
 /** validation for user Name  */
  if (!data.subject04) {
    return res.status(400).send({
      message: "subject05 is Not Provided !",
    });
  } 

 /** validation for user Name  */
  if (!data.subject05) {
    return res.status(400).send({
      message: "subject05 is Not Provided !",
    });
  } 

 /** validation for user Name  */
  if (!data.marks01) {
    return res.status(400).send({
      message: "marks01 is Not Provided !",
    });
  } 
 /** validation for user Name  */
  if (!data.marks02) {
    return res.status(400).send({
      message: "marks02 is Not Provided !",
    });
  } 
 /** validation for user Name  */
  if (!data.marks03) {
    return res.status(400).send({
      message: "marks03 is Not Provided !",
    });
  } 

 /** validation for user Name  */
  if (!data.marks04) {
    return res.status(400).send({
      message: "marks04 is Not Provided !",
    });
  } 

 /** validation for user Name  */
  if (!data.marks05) {
    return res.status(400).send({
      message: "marks05 is Not Provided !",
    });
  } 

  next();
};

module.exports = {
  checkStudentInfoValidation,
};
