//
// var s=document.createElement('script');
// s.setAttribute('src','https://code.jquery.com/jquery.js');
// document.getElementsByTagName('head')[0].appendChild(s);

// This is hacky. Fix later with XMLHttpRequest

window.portInterval = window.setTimeout(function(){
  console.log("hey there")
  $.get("http://localhost:3000/ohhay", function(data){
    console.log('fukc')

    if($('#butterbar').length == 0)
    {
        $('<div></div>')
        .attr({id: 'butterbar'})
        .appendTo('body');
    }

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

    width = document.width;
    butterBarWidth = $('#butterbar').width();

    var left = ((width - butterBarWidth) / 2);
    console.log("fuck me up fam " + data)

    // $('#butterbar').css({
    //     'top': 20,
    //     'left': left,
    //     'position': fixed,
    //     'width':500,
    //     'height':500,
    //     'background-color':pink
    // });
    //

    //
    // $('#butterbar').show('highlight',{},2000, function(){
    //     setTimeout(function(){
    //         $('#butterbar').hide();
    //         $('#butterbar').html('');
    //     }, 2000);
    // });
  });
}, 500)
