let mongoose = require('mongoose');
let schedule = require('node-schedule');
let network_scanner = require('./server/controllers/users')

module.exports = {
  attendance_check: function(req, res){
    var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [new schedule.Range(1, 5)];
    rule.hour = [9, 12, 15];
    rule.minute = 5;

    schedule.scheduleJob(rule, function(){
      return network_scanner.scan()
     })
  }
}
