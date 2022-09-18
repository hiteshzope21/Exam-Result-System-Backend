const Faculty = require("../models/faculty.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



/// Signup  

/**
 *  Faculty : 
 *      Fields :
 * 
 *  1. Name 
 *  2. password
 *  3. Email 
 *  4. user type
 *  5. College
 *    
 */

async function signup( req ,res ){

    const FacultyDetails = {
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        college : req.body.college
    }

    try {
        const addedUser = await Faculty.create( FacultyDetails );

        const newFaculty = {
            name : addedUser.name,
            email : addedUser.email,
            userType : addedUser.userType,
            college : addedUser.college
        }

        res.status(201).send({
            message: `${ addedUser.name } , Added Successully !`,
            user: newFaculty
        });

    }catch( error ){
        console.log( error );
        res.status(500).send({
            message : "Internal server Error"
        })
    }
}


async function signin( req ,res ){ 

    try {
        var faculty = await Faculty.findOne({ email: req.body.email });
    } catch (err) {
        console.log(err.message);
    }

    if (faculty == null) {
        return res.status(400).send({
            success : false,
            message :"Faculty Doesn't Exist"

        })
    }


    const checkPassword = bcrypt.compareSync(req.body.password, faculty.password);

    if (!checkPassword ) {
        return res.status(401).send({
            success : false,
            message : "Password is not valid",
        } );
    }

    const token = jwt.sign({ id: faculty.id }, process.env.SECRET, {
        expiresIn: '2h'
    });

    res.status(200).send({
        success : true,
        message: `${ faculty.name } login Successfully !`,
        Faculty: {
            name: faculty.name,
            email: faculty.email,
            userType: faculty.userType,
            JWTtoken: token
        }
    })
}

module.exports = {
    signup ,
    signin
}