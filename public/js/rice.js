<!DOCTYPE html>

<!--  YOU NEED JQUERY AND UNDERSCORE TO BE INSTALLED HERE -->
<html>
<script type="text/template" class="template">
<style type="text/css">
  .modalDialog {
    color:<%- rc.color %>;

  }
  #testing{
    background-color: <%- rc.backgroundColor %>;
  }
  .modalDialog {
  	position: absolute;
  	top: 0;
  	right: 0;
  	bottom: 0;
  	left: 0;
  	background: rgba(0,0,0,0.8);
  	z-index: -1,auto;
  	opacity:0;
  	-webkit-transition: opacity 400ms ease-in;
  	-moz-transition: opacity 400ms ease-in;
  	transition: opacity 400ms ease-in;
  	pointer-events: none;
  }
  .modalDialog:target {
  	opacity:1;
  	pointer-events: auto;
  }
  .clickspecial{
    font-size: 50px;
    padding:40px;
    padding-bottom:400px;
    padding-left:300px;
  }
  .modalDialog > div {
  	width: 400px;
    min-height: 200px;
  	position: relative;
  	margin: 10% auto;
  	padding: 5px 20px 13px 20px;
  	border-radius: 10px;
  	background: #fff;
  	background: -moz-linear-gradient(#fff, #999);
  	/*background: -o-linear-gradient(#fff, #999);*/
  }
  .wrapper{
    display:flex;
    flex-direction: column;
    overflow:auto;


  }
  .inside{
    flex-direction: column;
    font-size: 20px;
  }

  .close {
  	background: #606061;
  	color: #FFFFFF;
  	line-height: 25px;
  	position: absolute;
  	right: -12px;
  	text-align: center;
  	top: -10px;
  	width: 24px;
  	text-decoration: none;
  	font-weight: bold;
  	-webkit-border-radius: 12px;
  	-moz-border-radius: 12px;
  	border-radius: 12px;
  	-moz-box-shadow: 1px 1px 3px #000;
  	-webkit-box-shadow: 1px 1px 3px #000;
  	box-shadow: 1px 1px 3px #000;
  }
  .modal{
    font-size: 300px;
  }
  .close:hover { background: #00d9ff; }
  #displaybar{
    z-index: -1,auto;
    position:fixed;
    height: 1000px;
    width:1000px;
    border: 2px solid #f0c36d;
    background-color: pink;

  }
</style>
<head>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
</head>
<a class="clickspecial" href="#openModal">Click for special</a>

  <div id="openModal" class="modalDialog">
    <div id="testing">

      <a href="#close"title="Close" class="close">X</a>
      <div class="wrapper">
        <div class="inside">
          <h1> hi here is the special of the day: <%- rc.menuitem %></h1>

          <h1> for a low, low cost of <%- rc.price %></h1>

      </div>
    </div>

    </div>
</div>


</script>



<script>

  _.templateSettings.variable = "rc";
   // Grab the HTML out of our template tag and pre-compile it.
   var template = _.template(
       $( "script.template" ).html()
   );

  console.log("hey there")
  var clientid=$("script[client-id]").attr("client-id")
  console.log(clientid)

    $.ajax({
      url:'http://localhost:3000/finished/'+clientid,
      type:'GET',
      success:function(data){

        console.log(data, 'hallo')
        var templateData = {
          menuitem:data.menuitem,
          color:data.color,
          price:data.price,
          backgroundColor: data.backgroundColor
        }
        $('body').append(
               template( templateData )
           );
      }
    })

    $("#target").click(function(){
      event.preventDefault();
      $(".modalDialog").toggle();
    })






</script>





</html>
