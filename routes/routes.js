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

var codeIsLife = `
var s=document.createElement('script');
s.setAttribute('src','https://code.jquery.com/jquery.js');
document.getElementsByTagName('head')[0].appendChild(s);
var t=document.createElement('script');
t.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js");
document.getElementsByTagName('head')[0].appendChild(t);

var paramGetter = function(name){
      console.log('i am inside the getter')

      var name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexString = "[\\?&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexString);
      var found = regex.exec(window.location.search);
      // console.log("getParameterByName",name, context, found)
      if(found == null)
        return "";
      else
        return decodeURIComponent(found[1].replace(/\+/g, " "));
    }

if (paramGetter("tester") === "yes") {
  console.log('ok test mode');
}

    window.portInterval = window.setTimeout(function(){
        var txt1 = "Today's special is {{food}} for price of {{price}}";
        var button = document.createElement("BUTTON");
        button.setAttribute("id", "myBtn");
        //$("button").text("Click me");
        var modal = document.createElement("div");
        modal.setAttribute("id", "myModal");
        modal.setAttribute("class", "modal");
        var contentDiv = document.createElement("div");
        contentDiv.setAttribute("class", "modal-content");
        var header = document.createElement("div");
        header.setAttribute("class", "modal-header");
        header.style.color = "{{color}}";
        contentDiv.append(header);
        var closer = document.createElement("span");
        closer.setAttribute("class", "close");
        header.append(txt1);
        var txt2 = $("<p></p>").text("LisaHoong");
        $("body").append(button, contentDiv);

        var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    }, 500);
    `;

var style = `<style>
.modal-content {
   position: relative;
   background-color: #fefefe;
   margin: auto;
   padding: 0;
   border: 1px solid #888;
   width: 80%;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
   -webkit-animation-name: animatetop;
   -webkit-animation-duration: 0.4s;
   animation-name: animatetop;
   animation-duration: 0.4s
}
</style>`

var cssFileStream = fs.createReadStream(__dirname + '/modal.css');
cssFileStream.on('error', function(err) {
  console.log('File error:', err);
})

//console.log('code is: ', codeIsLife);

    var source = "console.log('hello {{name}} i am watching you i hate this shit')";
    var template = handlebars.compile(source);
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
