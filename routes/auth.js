const express = require('express')
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys/keys')


// signup route
router.post('/signup',(req,res)=>{
    var { name,email,password,cnfPassword}=req.body;
    console.log(req.body)
    if(!email || !password || !name || !cnfPassword){
       err = "Kindly provide all necessary credentials for logging in!";
       return res.status(422)
                    .send({error:err})
    }
    if(password != cnfPassword ){
        err="Uh-oh. Passowords doesn't seem to match with each other!";
        return res.status(422)
                    .send({error:err})
    }
    User.findOne({email : email}).then((savedUser)=>{
        // getting a callback after calling the finOne() method
        if(savedUser){
            // user already in the db
            return res.status(422)
                        .send({error:"An account with the same email address already exists! Try logging in."})
        }
        // is user not there in the db then make a user
        bcrypt.hash(password, 15).then(hashedpwd => {
            const newUser = new User({
                name,
                email,
                password:hashedpwd,
            })  
            console.log(newUser)
            // saving user to the db
            newUser.save().then(response=>{
                res.send({
                    message:"User successfully created! Login to continue..."
                })
            }).catch(err=>{
                // error saving to the db
                return res.status(400)
                            .send({error:"Error creating an account at the moment! Try again in few minutes..."})
            })
        }).catch(err=>{
            // error hashing, we cant send this result to the user
            // so we will send the user something like
            console.log(err)
            return res.status(400)
                        .send({error:"Something went wrong! Try again and if the error still persists, let us know..."})
        })
    }).catch(err=>{
        // error finding user
        return res.status(400)
                    .send({
                        error:"Something went wrong while creating your account! Try again and if the error still persists, let us know..."
                    })
    })
});

// log in route
router.post('/login',(req,res)=>{
    const { email, password } = req.body
    if(!email || !password){
        // not all details provided by the user
        err = "Kindly provide all necessary credentials for logging in!";
        return res.status(422)
                    .send({error:err})
    }
    // finding user in the db
    User.findOne({email:email}).then(result=>{
        if(!result){
            // user not found in the db
            return res.status(422)
                        .send({
                            error:'An account with this email doesn\'t exist. Try making one now!'
                        })
        }
        // i have found the user
        // checking the password with the saved hashed password in the db
        bcrypt.compare(password, result.password).then(match=>{
            if(match){
                // passwords match 
                // generating a token and validating the user
                const token = jwt.sign({_id:result._id},JWT_SECRET)
                var { name, email, _id } = result
                // sending details to frontend to be saved in the localstorage
                res.send({
                    message:"Login successful! Wohoo",
                    token,
                    user:{
                        name,
                        email,
                        _id,
                    }
                })
            }else{
                // passwords donot match
                return res.status(422)
                            .send({
                                error:'Invalid email and password combination!'
                            })
            }
        }).catch(err=>{
            // something wrong with the bcrypt.compare()
            // cant show user that so sending an appropriate repsonse
            return res.status(500)
                        .send({
                            error:"Something went wrong! Try again and if the error still persists, let us know..."
                        })
        })
    }).catch(err=>{
        // error finding result
        return res.status(422)
                    .send({
                        error:'Uh-oh! Our servers are a bit busy, try again in few moment!'
                    })
    })

})

module.exports=router;