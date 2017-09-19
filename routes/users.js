var express = require('express');
var router = express.Router();

var User = require('../database/user.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.json({users: [{name: 'Timmy'}]});

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

module.exports = router;
