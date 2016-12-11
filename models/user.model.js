 var mongoose = require('mongoose');
 	Schema = mongoose.Schema;

 var userSchema = new Schema({
 	username: {
 		type: String,
 		required: true,
 		unique: true
 	},
 	email: {
 		type: String,
 		required: true
 	},
 	password: {
 		type: String,
 		required: true
 	}
 })

userSchema.statics.findByUsername = function(username, cb) {
  this.model('user').findOne({username: username}, cb);
}
 module.exports = mongoose.model('user', userSchema);
