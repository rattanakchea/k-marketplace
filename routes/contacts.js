var express = require('express');
var router = express.Router();
var Contact = require('../database/contact.model');

/* GET contacts */
router.get('/', function (req, res, next) {
  Contact.find((err, users) => {
    if (err) res.send(err);
    res.json(users);
  })
});

router.get('/:contact_id', function (req, res, next) {
  Contact.findById(req.params.contact_id, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  })
});

module.exports = router;
