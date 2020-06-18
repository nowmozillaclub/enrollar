const express = require('express')
const routes = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const user = require('./models.js');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash')


routes.use(bodyParser.urlencoded({extended:true}));
routes.use(passport.initialize());
routes.use(passport.session());

routes.use(flash());
// MIDDLEWARES
// Global variable
routes.use(function (req, res, next) {
    res.locals.success_message = req.flash('success_message');
    res.locals.error_message = req.flash('error_message');
    res.locals.error = req.flash('error');
    next();
});

routes.use(cookieParser('secret'));
routes.use(session({
    secret:'secret',
    maxAge:360000,
    resave:true,
    saveUninitialized:true
}));
const checkAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
        return next();
    } else {
        res.redirect('/login');
    }
}

 mongoose.connect('mongodb+srv://jagrti:JHA8875091601@cluster0-ul1ff.mongodb.net/login_details?retryWrites=true&w=majority',
 {
     useNewUrlParser:true,useUnifiedTopology:true,
 }).then(()=>console.log("Database connected"));

routes.get('/',(req,res) =>{
    res.render('index')
})
routes.post('/register',(req,res)=>{
    var {email,username,password,confirmpassword}=req.body;
    var err;
    if(!email || !password || !username){
       err = "please fill all detials";
       res.render('index',{'err':err} );
    }
    if(password != confirmpassword ){
        err="password does not match";
        res.render('index',{'err':err});
    }
    if(typeof err == 'undefined'){
        user.findOne({email : email},function(err,data){
            if(err) throw err;
            if(data){
                console.log("user exist");
                err = "Password",
                res.render('index',{'err':err,'email':username});
            }
           else(
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    password = hash;
                    user({
                        email,
                        username,
                        password,
                    }).save((err, data) => {
                        if (err) throw err;
                        req.flash('success_message', "Registered Successfully.. Login To Continue..");
                         res.redirect('/login');
                     
                         });
                   })
                   

                   })
        )})
           
        
    }
});

//Authication startregy
var localStratergy =  require('passport-local');
passport.use({usernameField:'email'},(email,password,done)=>{
    user.findOne({email:email},(err,data) =>{
        if(err) throw err;
        if(!data) return done(null,false,{message:"user does not exist"});
        bcrypt.compare(password,data.password,(err,match) =>{
            if(err) throw err;
            if(!match) {
                return done(null,false,{message:"password dont match"})
            } 
            if(match){
                return done(null,data)
            }
        });
    });
})
routes.post('/login',(req,res,next)=>{
    passport.authenticate('local',{
        failureRedirect: '/login',
        successRedirect:'/success',
    })(req,res,next);
})

passport.serializeUser(function(user,cb){
cb(null,user.id);
});
passport.deserializeUser(function(id,cb){
    user.findById(id,function(err,user){
        cb(err,user);
    })
})
routes.get('/success',checkAuthenticated,(req,res) =>{
    res.render('success');
})

routes.get('/login',(req,res) =>{
    res.render('login')
})
routes.get('/logout',(req,res) => {
    req.logout(); 
    res.redirect('/login');
})
module.exports=routes;