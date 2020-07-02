const express = require('express');
const router = express.Router();
// const User = require('../models/user');
const getCoursera = require('./courseraCP');
const getEdX = require('./edx');

router.get('/search',(req,res)=>{
    let query = req.body.query;
    console.log(query)
    if(query!=null){
        // getCoursera(query).then(results=>{
        //     console.log("got result")
        //     res.json(results);
        // }).catch(err=>{
        //     res.status(505).send({error:"Our server seems too busy right now! Try refreshing it..."})
        //     console.log("Error:",err)
        // })
        Promise.all([ getEdX(query), getCoursera(query) ]).then(results=>{
            let draft = [ ...results[0], ...results[1]]
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