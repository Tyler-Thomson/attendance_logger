let mongoose = require('mongoose');
let User = mongoose.model('User');
let Attendance = mongoose.model('Attendance');
let ip_collect = require('./mac_collect');


module.exports = {
    index: function (req, res) {
        Attendance.find({}, (err, attendances) => {
            if (err) { return res.json(err) }
            return res.json(attendances);
        })
    },
    scan: function (req, res) {
        User.find({}, (err, users) => {
            if (err) { return res.json(err) }
            let all_macs = ip_collect.collect_all_macs().split("\n");
            let current_hour = (new Date()).getHours().toString();
            let date = new Date();
            // date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            for (let user of users) {
                for (let mac of user.mac_address) {
                    console.log("Working here")
                    if (mac in all_macs) {
                        console.log("Check 1")
                        var attendance = new Attendance({
                            time : this.time,
                            date : this.date,
                            user : user._id
                        })
                        console.log("Check 2")
                        attendance.save(function(err){
                            if(err){
                                return res.json(err);
                            }
                            else{
                                console.log("Worked")
                                return res.json(attendance);
                            }
                        });
                    }
                }
            }
            // return res.json(users);
        })
    }
}
