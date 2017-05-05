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

  .banner-container {
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0px;
    height: 22px;
    color: {{bodyTextColor}};
    background-color: {{backgroundColor}};
    padding: 3px;
  }

  .banner-content-container {
    display: flex;
    hei
    flex-direction: row;
    justify-content: space-around;
  }

  </style>`;

  var modal = $(`<div id="banner" class="banner-container">
  <span id='close-modal' class='close'>X</span>
    <div class="banner-content-container">
    <div><p>{{bodyText}}</p></div>
    </div>
  </div>`)


  $("head").append(style);
  $("body").append(modal);




  var banner = document.getElementById('banner');

  $("#close-modal").click(function() {
    console.log('closing the modal');
    banner.style.display="none";
  })

  $("window").click(function(event) {
    console.log('window');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  })


}, 500);
