const Student = require("../models/student.model");
const Faculty = require("../models/faculty.model");


/** Insert Student Record */
exports.createStudentInfo = async (req, res) => {
  const StudentObj = {
    name: req.body.name,
    fathername: req.body.fathername,
    email: req.body.email,
    semester: req.body.semester,
    enrollment: req.body.enrollment,
    course: req.body.course,
    branch : req.body.branch,
    mobile: req.body.mobile,
    college: req.body.college,
    subject01: req.body.subject01,
    subject02: req.body.subject02,
    subject03: req.body.subject03,
    subject04: req.body.subject04,
    subject05: req.body.subject05,
    marks01: req.body.marks01,
    marks02: req.body.marks02,
    marks03: req.body.marks03,
    marks04: req.body.marks04,
    marks05: req.body.marks05,
  };

  try {
    const faculty = await Faculty.findOne({ _id : req.id });
    StudentObj.studentCreatedBy = faculty.name;
    const student = await Student.create(StudentObj);

    const StudentInfoAdded = {
      name: student.name,
      fathername: student.fathername,
      email: student.email,
      semester: student.semester,
      enrollment: student.enrollment,
      course: student.course,
      branch: student.branch,
      studentCreatedBy : student.studentCreatedBy,
      mobile: student.mobile,
      college: student.college,
      subject01: student.subject01,
      subject02: student.subject02,
      subject03: student.subject03,
      subject04: student.subject04,
      subject05: student.subject05,
      marks01: student.marks01,
      marks02: student.marks02,
      marks03: student.marks03,
      marks04: student.marks04,
      marks05: student.marks05,
    };

    console.log(StudentObj.studentCreatedBy);
    console.log(StudentObj);

    res.status(201).send({
      message: `${StudentInfoAdded.name} , Added Successully !`,
      student: StudentInfoAdded,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

/**Get All student Records */
exports.getStudentDetails = async (req, res) => {
  try {
    const faculty = await Faculty.findOne({ _id : req.id })
    const studentsList = await Student.find({ studentCreatedBy : faculty.name});




    if (!studentsList) {
      return res.status(200).send({
        message: "No Record Found !",
      });
    }
console.log("Faculty : " , faculty.name);
console.log("Students : ",studentsList);

    if( studentsList ){

      return res.status(200).send({
        message: "Student Fetched Successfully !",
        TotalRecords: studentsList.length,
        students: studentsList,
      });
    }else{
      return res.status(400).send({
        message: "Only faculty who created , can access the Record !",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      message: error.messsage,
    });
  }
};

/** Get students By ID */
exports.getStudentByID = async (req, res) => {
  try {
    const studentsList = await Student.findOne({
      _id: req.params.id,
    });

    if (!studentsList) {
      return res.status(200).send({
        message: "No Record Found by ID!",
      });
    }

    return res.status(200).send({
      message: "Student Fetched Successfully !",
      students: studentsList,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      message: error.messsage,
    });
  }
};

/** Update Student Record  */ exports.updateStudentByID = async (req, res) => {
  const StudentObj = {
    name: req.body.name,
    fathername: req.body.fathername,
    email: req.body.email,
    semester: req.body.semester,
    enrollment: req.body.enrollment,
    course: req.body.course,
    branch: req.body.branch,
    mobile: req.body.mobile,
    college: req.body.college,
    subject01: req.body.subject01,
    subject02: req.body.subject02,
    subject03: req.body.subject03,
    subject04: req.body.subject04,
    subject05: req.body.subject05,
    marks01: req.body.marks01,
    marks02: req.body.marks02,
    marks03: req.body.marks03,
    marks04: req.body.marks04,
    marks05: req.body.marks05,
  };

  try {
    const updateStudent = await Student.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        fathername: req.body.fathername,
        email: req.body.email,
        semester: req.body.semester,
        enrollment: req.body.enrollment,
        course: req.body.course,
        branch: req.body.branch,
        mobile: req.body.mobile,
        college: req.body.college,
        subject01: req.body.subject01,
        subject02: req.body.subject02,
        subject03: req.body.subject03,
        subject04: req.body.subject04,
        subject05: req.body.subject05,
        marks01: req.body.marks01,
        marks02: req.body.marks02,
        marks03: req.body.marks03,
        marks04: req.body.marks04,
        marks05: req.body.marks05,
      }
    ).exec();

    console.log(updateStudent);

    const updateStudentInfo = {
      name: updateStudent.name,
      fathername: updateStudent.fathername,
      email: updateStudent.email,
      semester: updateStudent.semester,
      enrollment: updateStudent.enrollment,
      course: updateStudent.course,
      branch:updateStudent.branch,
      mobile: updateStudent.mobile,
      college: updateStudent.college,
      subject01: updateStudent.subject01,
      subject02: updateStudent.subject02,
      subject03: updateStudent.subject03,
      subject04: updateStudent.subject04,
      subject05: updateStudent.subject05,
      marks01: updateStudent.marks01,
      marks02: updateStudent.marks02,
      marks03: updateStudent.marks03,
      marks04: updateStudent.marks04,
      marks05: updateStudent.marks05,
    };

    res.status(200).send({
      status: 200,
      message: ` ${StudentObj.name} Record Updated Successfully !`,
      user: StudentObj,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: 500,
      message: "Internal Server Error , updating !",
    });
  }
};

/**Delete Student Record */
exports.deleteStudentByID = async (req, res) => {
  try {
    const studentsList = await Student.findByIdAndDelete(req.params.id);

    console.log(studentsList);
    if (!studentsList) {
      return res.status(200).send({
        message: "No Record Found !",
      });
    }

    return res.status(200).send({
      message: "Deleted Student Record Successfully !",
    });
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      message: error.messsage,
    });
  }
};

exports.getResultByEnrollment = async (req, res) => {

  try{
    const studentsData = await Student.findOne({ enrollment : req.params.enrollment });
    console.log( studentsData );
  
  if( studentsData == null ){
    res.status(400).send("No Data found for this Enrollment !" );
  }

  res.status(200).send({
    status: 200,
    success : true,
    message: `Enrollment Record Fetch Successfully !`,
    user: studentsData,
  });

}
catch( error ){
  console.log( error )
}

}
