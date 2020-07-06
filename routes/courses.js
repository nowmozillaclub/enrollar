const express = require('express');
const router = express.Router();
// const User = require('../models/user');
const getCoursera = require('./courseraCP');
const getEdX = require('./edx');

router.post('/search',(req,res)=>{
    let query = req.body.query;
    console.log(query)
    if(query!=null){
        Promise.all([ getEdX(query), getCoursera(query) ]).then(results=>{
            let draft = [ ...results[1], ...results[0]]
            res.json(draft);
        }).catch(err=>{
            res.status(505).send({error:"Our server seems too busy right now! Try refreshing it..."})
            console.log("Error:",err)
        })
    }else{
        res.status(404).send({error:"Unprocessable entity! Make sure you have given a right input..."})
    }
})

module.exports = router;