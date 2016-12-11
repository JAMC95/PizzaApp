var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/auth',   passport.authenticate('local',{failureRedirect: 'login', failureFlash:false}), function(req, res) {
  var post = req.body;
  res.redirect('/');
});
module.exports = router;
