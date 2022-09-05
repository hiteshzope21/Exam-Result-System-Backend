/**
 * This file containns the Logic of creating User  
 * 
 */
 
const bcrypt = require("bcryptjs");
const User = require("../models/student.model");

const createUser =async ( req, res ) => {

    const data = req.body ;

    const userInDB = {
        name : data.name,
        email : data.email,
        password : bcrypt.hashSync(data.password, 6)
    }

    try{
        const user = await User.create(userInDB);

        const userAdded = {
            name : user.name,
            email : user.email,
            password : user.password,
        }

        res.status(201).send({
            message: `${userAdded.name} , Added Successully !`,
            user: userAdded
        });
    }
    catch (err) {  
        res.status(500).send({
            message: "Internal Server Error"
        })
    }

    
}

module.exports = { 
    createUser 
}