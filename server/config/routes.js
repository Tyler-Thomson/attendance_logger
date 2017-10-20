let path = require('path');
let Users = require('../controllers/users');

module.exports = function(app){

  app.get('/users', Users.index);
  app.post('/users', Users.create);
  app.get('/users/:id', Users.show);
  app.put('/users/:id', Users.update);
  app.delete('/users/:id', Users.destroy);

  app.get('/scan', Users.scan);

  app.all('*', (req, res, next) => {
      res.sendFile(path.resolve('./public/dist/index.html'));
    });
};
