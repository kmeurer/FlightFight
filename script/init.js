$(document).ready(function(){
  window.planes = [];
  console.log(user);
  $('body').prepend(user.$node);
});
  var throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      var now = new Date().getTime();
      previous = options.leading === false ? 0 : now;
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };


  var user = userPlane();
  //var shoot = throttle(user.fire, 1000);
$('html').keydown(function(e){
  var code = (e.keyCode ? e.keyCode : e.which);
  if(code === 40){
    // move plane some down;
    user.move(0, 20);
    console.log("down");
  } else if(code === 38 && user.top > 0){
    // move plane some up;
    user.move(0, -20);
    console.log("up");
  } else if(code === 37 && user.left > 0){
    user.move(-20, 0);
  } else if(code === 39){
    user.move(20, 0);
  } else if(code === 32){
    console.log('fire!');
    user.fire();
  } else {
    return;
  }
$('html').keyup(function(e){
});
});
