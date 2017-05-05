var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  restaurant: String,
  packageid:String
});

var package = mongoose.Schema({
  selectedOption: String,
  backgroundColor: String,
  bodyTextColor: String,
  bodyText: String,
  json: Object,
  selectedTrigger: String,
  headerText: String,
  buttonText: String,
  descriptionText: String,
  imageLink: String,
  menupic: { data: Buffer, contentType: String }
})




User = mongoose.model('User', userSchema);
Package = mongoose.model('Package', package);

module.exports = {
    User:User,
    Package: Package
};
