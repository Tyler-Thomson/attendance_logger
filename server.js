let express = require('express');
let bp = require('body-parser');
let morgan = require('morgan');
const path = require('path');
let app = express();

let schedule = require('node-schedule');

app.use(morgan('tiny'));
app.use(express.static(__dirname + '/public/dist'));
app.use(bp.json());

app.enable('trust proxy', true);

require('./server/config/mongoose');
require('./server/config/routes')(app);

let scheduler = require('./scheduler')
scheduler.attendance_check();

app.listen(8000, function(){
  console.log('listening on port 8000');
})
