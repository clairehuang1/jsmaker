var s=document.createElement('script');
s.setAttribute('src','https://code.jquery.com/jquery.js');
document.getElementsByTagName('head')[0].appendChild(s);

var t=document.createElement('script');
t.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js");
document.getElementsByTagName('head')[0].appendChild(t);

console.log(window.location.pathname);

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

  .side-panel-container {
    position: fixed;
    z-index: 1;
    top: 50px;
    background-color: #fff;
    padding: 10px;
  }

  .side-content-container {
    display: flex;
    flex-direction: column;

  }

  .slideout {
  background: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  color: #333;
  position: fixed;
  top: 100px;
  left: 0px;
  width: 500px;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.slideout.on {
  left: 0;
}

  .slide {
    position: absolute;
    left: -300px;
    width: 200px;
    height: 400px;
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 0s;
    animation: slide 0.5s forwards;
    animation-delay: 0s;
}

.out {
  left: 0px;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 0s;
  animation: slide 0.5s forwards;
  animation-delay: 0s;
}

#panel {
  width: 1px;
  opacity: 0;
  transition: .75s;
}

#panel.show {
  opacity: 1;
  width: 200px;
  height: 400px;
}

@-webkit-keyframes slide {
    100% { left: 0; }
}

@keyframes slide {
    100% { left: 0; }
}

  </style>`;

  var modal = $(`<div id="panel" class="slide show side-panel-container">
  <span id='close-modal' class='close'>X</span>
    <div class="side-content-container">
    <div><h1>Today's Specials</h1></div>
    <div><h2>chikin</h2></div>
    <div><h3>fitty dowler velly cheap</h3></div>
    </div>
  </div>`)


  $("head").append(style);
  $("body").append(modal);




  var panel = document.getElementById('panel');

  $("#close-modal").click(function() {
    console.log('closing the modal');
    $("#panel").toggleClass('show');
    //panel.style.display="none";
  })

  $("window").click(function(event) {
    console.log('window');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  })


}, 500);
