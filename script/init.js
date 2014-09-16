$(document).ready(function(){
  var user = userPlane();
  window.planes = [];
  $('html').keydown(function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code === 40){
      // move plane some down;
      console.log("down");
    } else if(code === 38){
      // move plane some up;
      console.log("up");
    } else {
      console.log("wrong Key pressed");
    }
  });
  console.log(user);
  $('body').prepend(user.$node);
});

