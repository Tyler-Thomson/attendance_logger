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
          console.log(request);
          return res.json(user);
        })
      }else{
        return res.json(user);
      }
    })
  },
  show: function(req, res){
    User.findById(req.params.id, function(err, user){
      if(!user){return res.json{(error:'Invalid user ID')}
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
