const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
    },

    fathername : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 10,
        unqiue : true
    },

    semester : {
        type : Number,
        required : true,

    },

    enrollment : {
        type : String,
        required : true,
        unique : true
    },

    course : {
        type : String,
        required : true,
    },
    
    branch : {
        type : String,
        required : true,
    },

    mobile : {
        type : Number,
        required : true,
    },

    college : {
        type : String,
        required : true,
    },

    studentCreatedBy : {
        type : String,
    },

    userType : {
        type : String ,
        default : 'STUDENT',
    },

    subject01 : {
        type : String,
        required : true,
    },

    subject02 : {
        type : String,
        required : true,
    },

    subject03 : {
        type : String,
        required : true,
    },

    subject04 : {
        type : String,
        required : true,
    },

    subject05 : {
        type : String,
        required : true,
    },

    marks01 : {
        type : Number,
        required : true,
    },

    marks02 : {
        type : Number,
        required : true,
    },

    marks03 : {
        type : Number,
        required : true,
    },

    marks04 : {
        type : Number,
        required : true,
    },

    marks05 : {
        type : Number,
        required : true,
    },

})

module.exports = mongoose.model("Student", studentSchema);