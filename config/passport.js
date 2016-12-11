var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var User = require(../models/user.model)
passport.use(new localStrategy({
  usernameField: 'user',
  passwordField: 'password'
}, function(username, password, done) {
  User.findByUsername
}));
