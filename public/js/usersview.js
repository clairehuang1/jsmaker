//
// var s=document.createElement('script');
// s.setAttribute('src','https://code.jquery.com/jquery.js');
// document.getElementsByTagName('head')[0].appendChild(s);

// This is hacky. Fix later with XMLHttpRequest

window.portInterval = window.setTimeout(function(){
  console.log("hey there")
  var clientid=$("script[client-id]").attr("client-id")
  console.log(clientid)
  $.get("http://localhost:3000/ohhay/"+clientid, function(data){
    console.log('fukc')

    if($('#displaybar').length == 0)
    {
        $('<div></div>')
        .attr({id: 'butterbar'})
        .appendTo('body');
    }

    $('#butterbar').submit(function(event){
      console.log(event);
      event.preventDefault();
      $.ajax({
        url:'/submitdatshit',
        method:'POST',
        data:{menuitem:},
        dataType: 'json',
        success: function(data){
          console.log("FUCK ME UP TIMES TWENYTY")
          console.log(data)
        }
      })
    })

    width = document.width;
    butterBarWidth = $('#butterbar').width();

    var left = ((width - butterBarWidth) / 2);
    console.log("fuck me up fam " + data)


  });
}, 500)
