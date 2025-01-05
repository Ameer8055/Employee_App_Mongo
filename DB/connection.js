const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Ameer123:Ameershah123@cluster0.ctwe0.mongodb.net/EmployeeDB?retryWrites=true&w=majority&appName=Cluster0').then(()=> console.log('Connection is established'))
.catch(()=> console.log('Connection not estalished'));


