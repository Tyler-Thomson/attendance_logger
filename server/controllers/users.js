let mongoose = require('mongoose');
let User = mongoose.model('User');
let session = require('express-session');
var spawn = require('child_process').execSync;

module.exports = {
  index: function(req, res){
    User.find({}, (err, users) =>{
      if(err){return res.json(err)}
      return res.json(users);
    })
  },
  create: function(req, res){
    User.findOne({email: req.body.email}, (err, user) => {
      if(err){return res.json(err)}
      else if(!user){
        User.create(req.body, (err, user) => {
          if(err){return res.json(err)}
          return res.json(user);
        })
      }else{
        session.client_ip = req.connection.localAddress
        var client_ip = session.client_ip

        var child = spawn('arp -a | grep client_ip | grep -o -E '([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}'', {
          shell: true
        });
        child.stdout.on('data', (data) => {
          console.log("stdout:", data.toString());
          var mac_address = data.toString();
        });
        child.stderr.on('data', (data) => {
        console.error("stderr:", data.toString());
        });
        return res.json(user);
      }
    })
  },
  show: function(req, res){
    User.findById(req.params.id, function(err, user){
      if(!user){return res.json({error:'Invalid user ID'})}
      if(err){return res.json(err)}
      return res.json(user);
    })
  },
  update: function(req, res){
		User.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, user){
			if(err){return res.json(err)}
      else{return res.json(user)}
		})
	},
	destroy: function(req, res){
		User.findByIdAndRemove(req.params.id, function(err, user){
			if(err){return res.json(err)}
			return res.json(user);
		})
	}
}
