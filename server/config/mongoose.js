let mongoose = require('mongoose');
let fs = require('fs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/attendance_logger', {useMongoClient:true});

let modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(function(file){
  if(file.includes('.js')){
    console.log(`loading ${file}`);
    require(`${modelsPath}/${file}`);
  }
})
