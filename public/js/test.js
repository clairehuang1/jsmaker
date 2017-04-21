
// var s=document.createElement('script');
// s.setAttribute('src','https://code.jquery.com/jquery.js');
// document.getElementsByTagName('head')[0].appendChild(s);

// This is hacky. Fix later with XMLHttpRequest

window.portInterval = window.setTimeout(function(){
  console.log("hey there")
  var clientid=$("script[client-id]").attr("client-id")
  console.log(clientid)

    console.log('fukc')

    if($('#butterbar').length == 0)
    {
        $('<div></div>')
        .attr({id: 'butterbar'})
        .appendTo('body');
    }
    $(function() {
    $("#butterbar").append($('<form/>', {action:'/submitdatshit', method:'POST '})
    .append($('<label for="">First Name</label>'),$('<input/>', {text: 'firstname', placeholder:'first name',type:'text', id:'firstname'}),
    $('<br/>'),
    $('<label for="">Last Name</label>'),
    $('<input/>', {text:"lastname", placeholder:'last name', type:'text', id:'lastname'}),$('<br/>'),
    $('<label for="">Menu Item</label>'),
    $('<input/>', {text:'menuitem', placeholder:'menu item',type:'menuitem', id:'menuitem'}),
    $('<br/>'),
    $('<button>submit me<button/>'),
    $('<br/>')
  ))
  })
    $('#butterbar').submit(function(event){
      event.preventDefault();
      $.ajax({
        url:'/submitdatshit',
        method:'POST',
        data:{firstname:$('#firstname').val(), lastname: $('#lastname').val(),
              menuitem:$('#menuitem').val()},
        dataType: 'json',
        success: function(data){
          console.log("FUCK ME UP TIMES TWENYTY")
          console.log(data)
        }
      })
    })

    // width = document.width;
    // butterBarWidth = $('#butterbar').width();
    //
    // var left = ((width - butterBarWidth) / 2);
    // console.log("fuck me up fam " + data)



}, 500)
