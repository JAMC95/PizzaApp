var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var User = require(../models/user.model)
passport.use(new localStrategy({
  usernameField: 'user',
  passwordField: 'password'
}, function(username, password, done) {
  User.findByUsername(username, function(err, user) {
    if(err)done(new Error("Error de autenticación"));
    if(!user){
      return done(null, false, {mensage: 'El usuario no existe'});
    }
    if(user.password != password){
      return done(null, false, {message: 'La contraseña no es válida'})
    }
    
  });
}));