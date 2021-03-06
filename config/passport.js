var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var _ = require('lodash');
var debug = require('debug')('app:passport');
var User = require('../models/user.model');

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id,function(err, user) {
    var userinfo = _.pick(user,'username', 'email', '_id');
    done(err, user);
  })
});

passport.use(new localStrategy({
  usernameField: 'user',
  passwordField: 'pass'
}, function(username, password, done) {

  User.findByUsername(username, function(err, user) {
    if(err)done(new Error("Error de autenticación"));
    if(!user){
      return done(null, false, {mensage: 'El usuario no existe'});
    }
    if(user.password != password){
      return done(null, false, {message: 'La contraseña no es válida'})
    }
    debug("Usuario autenticado");
    return done(null, user);
  });
}));

module.exports = passport;
