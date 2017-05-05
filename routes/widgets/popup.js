var s=document.createElement('script');
s.setAttribute('src','https://code.jquery.com/jquery.js');
document.getElementsByTagName('head')[0].appendChild(s);

var t=document.createElement('script');
t.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js");
document.getElementsByTagName('head')[0].appendChild(t);

console.log(window.location.pathname);
console.log("meow");

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

  var style =`<style>
  h2 {
    color: #000;
    font-size: 36px;
  }

  h3 {
    color: #000;
    font-size: 18px;
  }

  .content-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .description-container {
    flex-direction: column;
  }

  #myBtn {
    position: fixed;
    top: 20px;
    left: 0px;
    color: #fff;
    background-color: {{backgroundColor}};
    color: {{bodyTextColor}}
    border: 0px;
  }
  .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  /* Modal Content */
  .modal-content {
      background-color: #fff;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 60%;
      color: #000;
      text-align:center;
  }

  /* The Close Button */
  .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
  }

  .close:hover,
  .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
  }

  .special-img {
    height: 300px;
  }

  .circle {
  	width: 100px;
  	height: 100px;
  	background: red;
  	-moz-border-radius: 50px;
  	-webkit-border-radius: 50px;
  	border-radius: 50px;
    border: 0px;
  }

  .square {
  	width: 100px;
  	height: 100px;
    border: 0px;
  }

  .poly {
    width: 150px;
    height: 100px;
    border: 0px;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0 100%);
  }
  </style>`;

  var button = $("<button class='{{selectedTrigger}}' id='myBtn'><p>{{buttonText}}</p></button>")
  var modal = $(`<div id='myModal' class='modal'>
  <div class='modal-content'>
  <span id='close-modal' class='close'>X</span>
  <h1>{{headerText}}</h1>
  <div class="content-container">
  <div class="description-container">
    <div><h2>{{bodyText}}</h2></div>
    <div><h3>{{descriptionText}}</h3></div>
  </div>
  <div><img class="special-img" src="{{imageLink}}"</div>
  </div>
  </div>
  </div>`)


  $("head").append(style);
  $("body").append(button, modal);




  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  $("#myBtn").click(function(){
    modal.style.display = "block";
  })

  $("#close-modal").click(function() {
    console.log('closing the modal');
    modal.style.display="none";
  })

  $("window").click(function(event) {
    console.log('window');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  })


}, 500);
