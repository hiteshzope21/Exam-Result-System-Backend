const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        lowercase : true,
        unqiue : true
    },

    password :{
        type :String,
        required : true,

    },
    college : {
        type : String,
        required : true,
    },

    userType : {
        type : String ,
        default : 'FACULTY',
    },

  
})

module.exports = mongoose.model("Faculty", facultySchema);