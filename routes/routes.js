var express = require('express');
var router = express.Router();
var models = require('../models');
var User = models.User;
var Package = models.Package;

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
    color: req.body.color
  })
  newPackage.save()
  .then(function(package){
    res.status(200).json({

       package:package,
       menuitem: package.menuitem,
       color: package.color
     })
  });
})

router.post('/ohhay/:id', function(req,res){
  console.log("YOYO")
  Package.findById(req.params.id).exec()
  .then(function(package){
    res.status(200).json({
      menuitem:package.menuitem
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
    console.log(req.body)
    package.clientId = req.user._id
    package.menuitem=req.body.menuitem
    package.color=req.body.color
    return package.save();
  })
  .then(function(package){
    packageid = package._id;
    menuitem=package.menuitem;
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
  console.log(req.user._id)
  Package.findOne({clientId:req.params.clientid}).exec()
  .then(function(package){
    console.log("package is reached");
    console.log(package)
    res.status(200).json({
       package: package,
       menuitem: package.menuitem,
       color: package.color
     })
    // res.status(200).json({
    //   clur : true
    //  })
   }).catch(function(err){
       console.log(err)
     })

} )

module.exports = router;
