const express = require('express');
const morgan = require('morgan');
require('dotenv').config(); //dotenv importing
require('./DB/connection'); //mongo connection

const navbar =[{link:'/BasicRoute', name:'Home'},{link:'/BasicRoute/list', name:'Employee List'},
    {link:'/BasicRoute/adding', name:'Add Employees'}
]

const employeeRoute = require('./routes/BasicRoute')(navbar);
const app = new express();
app.use(express.static('public'));
app.use('/basicRoute',employeeRoute);
app.use(morgan('dev'));
app.set('view engine','ejs');
app.set('views',__dirname+'/views')







app.listen(3000,()=> console.log(`Server is running on http://localhost:3000/basicRoute/ `));
