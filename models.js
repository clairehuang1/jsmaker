var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  phone: String
});

var package = mongoose.Schema({
  firstname:String,
  lastname: String,
  menuitem: String
})




User = mongoose.model('User', userSchema);
Package = mongoose.model('Package', package);

module.exports = {
    User:User,
    Package: Package
};
