let mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let UserSchema = new mongoose.Schema({
  email:{
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "Email address is required"],
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
  mac_address: [{type: String}],
  attendances: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }]
}, { timestamps: true });

mongoose.model('User', UserSchema);
