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

 module.export = mongoose.model('user', userSchema);
 