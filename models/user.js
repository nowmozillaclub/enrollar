const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password :{
        type:String,
        require:true,

    },
    message:[{
        type:String,
    }]

});
module.exports = new mongoose.model('user',userSchema);