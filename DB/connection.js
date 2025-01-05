const mongoose = require('mongoose');

mongoose.connect(process.env.mongodbUrl).then(()=> console.log('Connection is established'))
.catch(()=> console.log('Connection not estalished'));


