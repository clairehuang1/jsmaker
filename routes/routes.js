var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.User;
var Package = models.Package;

router.get('/', function(req, res, next) {
  console.log(" i am reached")
  res.render('home');
});

router.post('/submitdatshit', function(req,res){
  console.log("ohhay")
  console.log(req.body)
  var newPackage = new Package({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    menuitem: req.body.menuitem
  })
  newPackage.save()
  .then(function(package){
    res.status(200).json({
       package:package,
       menuitme: package.menuitem
     })
  });
})

router.get('/ohhay', function(req,res){
  console.log("YOYO")
  res.send();
  // Package.findById(req.params.id)
  // .then(function(id){
  //   res.status(200).json({
  //     package:package,
  //     firstname:package.firstname
  //   })
  // })
})


module.exports = router;
