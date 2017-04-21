var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  restaurant: String,
  packageid:String
});

var package = mongoose.Schema({
  menuitem: String,
  color: String,
  clientId:String,
  price: String
})




User = mongoose.model('User', userSchema);
Package = mongoose.model('Package', package);

module.exports = {
    User:User,
    Package: Package
};
