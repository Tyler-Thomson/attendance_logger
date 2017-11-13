let mongoose = require('mongoose');

let AttendanceSchema = new mongoose.Schema({
    'date': { type: Date },
    'time': { type: String },
    'user': { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

mongoose.model('Attendance', AttendanceSchema);