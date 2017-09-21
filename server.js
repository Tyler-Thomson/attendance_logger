let express = require('express');
let bp = require('body-parser');
let morgan = require('morgan');
let session = require('express-session');
const path = require('path');

let app = express();
app.use(morgan('tiny'));
// app.use(express.static(__dirname + '/client/static'));
app.use(bp.json());
app.use(session({
  secret: 'ohsosecret',
  resave: false,
  saveUninitialized: true,
  cookie: {},
}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, function(){
  console.log('listening on port 8000');
})

