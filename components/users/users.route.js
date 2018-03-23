var express = require('express');
var router = express.Router();

var User = require('./user.model');

/* GET users listing. */
router.get('/', function (req, res, next) {

  User.find((err, users) => {
    if (err) res.send(err);
    res.json(users);
  })
});

router.get('/:user_id', function (req, res, next) {
  User.findById(req.params.user_id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  })
});

router.post('/signup', function (req, res, next) {
  // check for existing account
  if (req.body && req.body.username) {
    console.log('req username:', req.body.username);
    User.findOne({ username: req.body.username }, function (err, user) {
      console.log('User exists', user);
      if (user) {
        console.log('User already exists');
        res.send('Account exist');
      } else {
        User.create({
          username: req.body.username,
          password: req.body.password
        }, function (err, user) {
          if (err) {
            console.log("create error: ", err);
            res.send(err);
          }
          res.json(user);
        })
      }
    })
  }
});

module.exports = router;
