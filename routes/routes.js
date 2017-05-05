var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.User;
var Package = models.Package;
var fs = require('fs');
var AWS = require('aws-sdk');
var path = require('path');
var handlebars = require('handlebars')

//AWS.config.loadFromPath('./config.json');

var s3 = new AWS.S3();

router.get('/', function(req, res, next) {
  console.log(" i am reached")
  res.render('home');
});

//after they log in
router.post('/submitdatshit', function(req,res){
  console.log("ohhay")
  console.log(req.body)
  //if package ref does not exist,
  var newPackage = new Package({
    menuitem: req.body.menuitem,
    color: req.body.color,
    backgroundColor:req.body.backgroundColor
  })
  newPackage.save()
  .then(function(package){
    res.status(200).json({

      package:package,
      menuitem: package.menuitem,
      color: package.color,
      price:package.price,
      backgroundColor: package.backgroundColor
    })
  });
})

router.post('/ohhay/:id', function(req,res){
  console.log("YOYO")
  Package.findById(req.params.id).exec()
  .then(function(package){
    res.status(200).json({
      menuitem:package.menuitem,
      price: package.price
    })
  })

  // Package.findById(req.params.id)
  // .then(function(id){
  //   res.status(200).json({
  //     package:package,
  //     firstname:package.firstname
  //   })
  // })
})
router.get('/customer', function(req,res){
  res.render('ownerview',{customerid: req.user._id})
})
//find the user, check to see if there is a package id

router.post('/changeModal', function(req,res){
  var packageid = "";
  var menuitem=""
  User.findById(req.user._id).exec()
  .then(function(user){
    if (user.packageid){
      return Package.findById(user.packageid).exec()
    }else{
      var newPackage = new Package({});
      return newPackage.save();
    }
  }).then(function(package){
    console.log("asuh bitches")


    package.clientId = req.user._id
    package.menuitem=req.body.menuitem
    package.color=req.body.color
    package.price=req.body.price
    package.backgroundColor=req.body.backgroundColor
    console.log(req.body)
    console.log(req.files)
    // package.menupic.data=fs.readFileSync(req.body.menupic)
    // package.menupic.contentType='image/png'
    return package.save();
  })
  .then(function(package){
    packageid = package._id;
    menuitem=package.menuitem;

    var jsFileStream;

    if (package.type === "popup") {

      //Read in the right file for a pop-up widget
      jsFileStream = fs.readFileSync(__dirname + "/widgets/popup.js", 'utf8', (err, data) => {
        if (err) {
          console.log("Error: ", err);
        } else {
          console.log("Successfully read in file.");
        }
      })

    }

    else if (package.type === "banner") {
      jsFileStream = fs.readFileSync(__dirname + "/widgets/banner.js", 'utf8', (err, data) => {
        if (err) {
          console.log("Error: ", err);
        } else {
          console.log("Successfully read in file.");
        }
      })
    }

    else if (package.type === "panel") {
      jsFileStream = fs.readFileSync(__dirname + "/widgets/panel.js", 'utf8', (err, data) => {
        if (err) {
          console.log("Error: ", err);
        } else {
          console.log("Successfully read in file.");
        }
      })
    }

    else {
      //we done fukked lol
    }

    var codeIsLife = "console.log('hello there')";


    var cssFileStream = fs.createReadStream(__dirname + '/modal.css');
    cssFileStream.on('error', function(err) {
      console.log('File error:', err);
    })

    //console.log('code is: ', codeIsLife);
    //console.log('js file stream is: ', jsFileStream);
    var source = "console.log('hello {{name}} i am watching you i hate this shit')";
    var template = handlebars.compile(jsFileStream);
    var data = {"name": "kevin",
    "color": package.color,
    "food": package.menuitem,
    "price": package.price};

    var result = template(data);
    console.log('result is', result);

    var s3Params = {Bucket: 'jsbuilder', Key: 'hoongs.js', Body:result};

    s3.upload(s3Params, function(err, returnedData) {
      if (err) {
        console.log("Error: ", err);
      }
      if (returnedData) {
        console.log("JS upload success: ", returnedData.Location);
      }
    });

    s3.upload({Bucket: 'jsbuilder', Key: 'hoongsStyle.css', Body: cssFileStream}, function(err, returnedData) {
      if (err) {
        console.log("Error: ", err);
      }
      if (returnedData) {
        console.log("CSS upload success: ", returnedData.Location);
      }
    });




    return User.findById(req.user._id).exec()

  }).then(function(user){
    user.packageid=packageid;
    return user.save();
  }).then(function(user){

    console.log(menuitem)
    console.log(  "sfkhfsafhas MEEEE")
    res.render("sample",{

      menuitem: menuitem

    })
  }).catch(function(err){
    console.log(err)
  })
})


router.get('/finished/:clientid', function(req,res){
  console.log("sup")
  console.log(req.params.clientid)

  Package.findOne({clientId:req.params.clientid}).exec()
  .then(function(package){
    console.log("package is reached");
    console.log(package)
    res.status(200).json({
      package: package,
      menuitem: package.menuitem,
      color: package.color,
      price: package.price,
      backgroundColor: package.backgroundColor
    })
    // res.status(200).json({
    //   clur : true
    //  })
  }).catch(function(err){
    console.log(err)
  })

} )

module.exports = router;
