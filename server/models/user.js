let mongoose = require('mongoose');
//Not sure if I need to use bcrypt yet...
let bcrypt = require('bcryptjs');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let UserSchema = new mongoose.Schema({
  email:{
    type: String,
    trim: true,
    unique: true,
    // required: [true, "Email address is required"],
    // validate: [validateEmail, 'Please fill a valid email address']
  },
  mac_address:[{type: String}],
  attendance:{'9':{type: Boolean, default: false},
              '12':{type: Boolean, default: false},
              '15':{type: Boolean, default: false}},
}, { timestamps: true });

mongoose.model('User', UserSchema);
