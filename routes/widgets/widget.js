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
  $("#myBtn").click(function(){
    console.log('clicked button');
  })

  //
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }
  //
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

}, 500);
