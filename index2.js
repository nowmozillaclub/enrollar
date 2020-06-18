const express = require('express');
const app = express();
const routes = require('./routes/routes.js')
const path = require('path');
const { Router } = require('express');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.get('/',routes);
app.post('/register',routes);
app.get('/login',routes);
app.post('/login',routes);
app.get('/success',routes);
app.get('/logout',routes);
 

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log("the server is running on the port,",PORT));