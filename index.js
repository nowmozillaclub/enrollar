const express = require('express');
const mongoose = require('mongoose')
const { URI } = require('./keys/keys')
const bodyParser = require('body-parser')


const app = express();


// all middlewares
app.use( bodyParser.json() )
app.use(require('./routes/auth'))

// connecting to the db here
options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}
mongoose.connect(URI, options)

// checking connections by adding an event listener
mongoose.connection.on('connected',()=>{
    console.log("Connection went through!")
}).on('error',(err)=>{
    console.log("An error occured!",err)
})

// listening on port
const PORT = process.env.PORT || 5000;
app.listen(PORT ,()=>{
    console.log("Listening on Port",PORT)
});