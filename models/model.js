/**
 * This file contains the User Schema 
 */

const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    name : {
        type :"String",
        required : true
    },

    email : {
        type : "String",
        required : true,
        lowercase : true,
        minLength : 10,
    },

    password : {
        type : "String",
        required : true,
    }
});

module.exports = mongoose.model("User" , userSchema);