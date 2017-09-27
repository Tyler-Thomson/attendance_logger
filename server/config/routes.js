let path = require('path');
let Users = require('../controllers/users');

module.exports = function(app){

  app.get('/', Users.index);
  app.post('/users', Users.create);

  // app.get('/users/:id', Users.show);
  // app.put('/users/:id', Users.update);
  // app.post('/users/:id', Users.delete);

  // app.all('*', (req, res, next) => {
  //     res.sendFile(path.resolve('./public/dist/index.html'));
  //   });
};
