// authorization middleware
const jwt = require('jsonwebtoken')
const { JWT_SECRET } =require('../keys/keys')
const User = require('../models/user')

// exporting a function that takes in 3 arguements
module.exports = (req, res, next)=>{
    // always need to pass an authorization header
    // headers should always have a key named authorization
    // destructoring authorization
    const { authorization } = req.headers;
    console.log(authorization)
    if(!authorization){
        // no authorization header passed / not present
        // user is not authenticated
        return res.status(422)
                    .send({
                        error:"You must be authenticated!"
                    })
    }
    // user is authenticated
    // getting the token, as the authorization = "Bearer <token>"
    const token = authorization.replace("Bearer ",'')
    // verifying if the token is valid or not
    jwt.verify(token, JWT_SECRET,(err, payload)=>{
        if(err){
            // token not valid
            return res.status(401)
                        .send({
                            error:"You must be authenticated"
                        })
        }
        // if token is valid then this would be executed
        // since token is valid and since we passed _id when creating token
        const { _id } = payload
        // finding the user details associated with that id
        User.findOne({_id:_id}).then(result=>{
            // setting the user details in the req.user
            // so we can access them everytime if we need the info of the 
            // person logged in
            req.user = result
            next()
        }).catch(err=>{
            console.log(err)
        })
    })
}