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

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');

})

router.get('/register', function(req, res) {
  res.render('register');

})

var passportAuth =  passport.authenticate('local',{failureRedirect: 'login', failureFlash:false});

router.post('/auth',passportAuth, function(req, res) {
  var post = req.body;
  res.redirect('/');
});

module.exports = router;
