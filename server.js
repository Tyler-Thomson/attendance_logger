let express = require('express');
let bp = require('body-parser');
let morgan = require('morgan');
const path = require('path');
let app = express();

app.use(morgan('tiny'));
//app.use(express.static(__dirname + '/public/dist'));
app.use(bp.json());

app.enable('trust proxy', true);

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, function(){
  console.log('listening on port 8000');
})
