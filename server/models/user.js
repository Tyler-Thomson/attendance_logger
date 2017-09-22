let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let UserSchema = new mongoose.Schema({
  email:{
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required"],
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
  mac_address:{ type: String },
  attendance:[{type: Date}]
}, { timestamps: true });

UserSchema.pre('save', function(next){
  this.email = bcrypt.hashSync(this.email, bcrypt.genSaltSync(10));
  next();
})

mongoose.model('User', UserSchema);
