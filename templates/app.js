var express = require("express"),
    path = require("path"),
    nedb = require('nedb'),
    databaseSource = "db/users.db";

// Init database observer
var db = { users: new nedb({ filename: databaseSource, autoload: true }) };

// Init express
var app = express();

// Express Configurations
app.configure(function () {
  app.set('port', process.env.PORT || 2222);
  app.use(express.logger('dev'));
  app.use(express.bodyParser()),
  app.use(express.static(path.join(__dirname, 'public')));
});

// API Test
app.get('/api', function (req, res) {
  res.send('API is running!');
});

// API : GET => All Users
app.get('/api/users', function (req, res) {
  db.users.find({}, function(err, result) {
    res.send(result);
  });
});

// API : GET => User by ID
app.get('/api/users/:id', function (req, res) {
  db.users.find({_id: id}, function(err, result) {
    res.send(result);
  });
});

// API : POST => User
app.post('/api/users', function (req, res) {
  var user = req.body;
  db.users.insert(user, function (err, result) {
    if (err) {
      res.send({'error':'An error has occurred'});
    } else {
      console.log('Success: ' + JSON.stringify(result));
      res.send(result);
    }
  });
});

// API : DELETE => User by ID
app.delete('/api/users/:id', function (req, res) {
  var id = req.params.id;
  db.users.remove({_id: id}, {}, function (err, result) {
    if (err) {
      res.send({'error':'An error has occurred - ' + err});
    } else {
      console.log('' + result + ' user(s) deleted');
      res.send(req.body);
    }
  });
});

// Start Server
app.listen(app.get('port'));
console.log('Server listening on port ' + app.get('port'));