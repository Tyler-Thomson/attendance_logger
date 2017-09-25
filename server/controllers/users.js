let mongoose = require('mongoose');
let User = mongoose.model('User');

module.exports = {
  new: function(req, res){
      return res.render('users/login.ejs');
    },
  create: function(req, res){
    User.create(req.body, function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
        console.log(request);
        console.log("User saved successfully");
        return res.redirect('/users');
      }
    })
  },
  success: function(req, res){
    return res.render('users/success.ejs')
  },
}
