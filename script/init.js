$(document).ready(function(){
  window.planes = [];
  console.log(user);
  $('body').prepend(user.$node);
});

  var user = userPlane();
$('html').keyup(function(e){
  var code = (e.keyCode ? e.keyCode : e.which);
  if(code === 40){
    // move plane some down;
    user.move(0, 20);
    console.log("down");
  } else if(code === 38){
    // move plane some up;
    user.move(0, -20);
    console.log("up");
  } else if(code === 37){
    user.move(-20, 0);
  } else if(code === 39){
    user.move(20, 0);
  } else {
    console.log("wrong Key pressed");
  }
});
