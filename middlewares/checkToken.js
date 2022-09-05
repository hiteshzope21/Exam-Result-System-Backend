const jwt = require("jsonwebtoken");

function isToken(req, res , next){

    const token = req.headers["accesstoken"];
    console.log(token);
    if( !token ){
        return res.status(403).send({
            message : "Token is not Provided"
        })
    }


    jwt.verify(token, process.env.SECRET , ( err, decoded )=>{
        if(err){
            return res.status(401).send( "UnAuthorised");
        }
        req.id = decoded.id;
        next();

    })
};

module.exports = {
    isToken ,
}
