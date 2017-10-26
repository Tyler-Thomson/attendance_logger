let mongoose = require('mongoose');

let AttendanceSchema = new mongoose.Schema({
    'user': { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    'date': { type: Date },
    'time': { type: String }
}, { timestamps: true });

mongoose.model('Attendance', AttendanceSchema);