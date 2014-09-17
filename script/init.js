$(document).ready(function(){
  window.planes = [];
});


//used as a safeguard against user action outside of a game context
var gameRunning = false;

var startGame = function(){
  gameRunning = true;
  $('body').prepend(user.$node);
  var score = 0;
  $('#welcome').remove();

  window.setInterval( function(){spawnEnemy();}, 1500);
  window.setInterval( function(){moveEnemy();}, 15);
};

var spawnEnemy = function(){
  var randTop = Math.random() * $(window).height()-200;
  while(randTop < 20){
    randTop = Math.random() * $(window).height()-200;
  }
  var enemy = enemyPlane( randTop, $(window).width() );
  window.planes.push(enemy);
  $('body').prepend(enemy.$node);
};

var moveEnemy = function(){
  for( var i = 0; i < window.planes.length; i++){
    if(window.planes[i].left < -100){
      // subtract from score
      window.planes[i].$node.remove();
      window.planes.splice(i, 1);
    }
  }
  for( var i = 0; i < window.planes.length; i++ ){
      var randomY = 0;
      window.planes[i].move( -5, randomY );
  //display game over message and score;
  }
};

var checkCollision = function(obj1, obj2){
  // if the width of object 1
  var min1 = {x: obj1.left, y: obj1.top};
  var max1 = {x: obj1.left + obj1.$node.width(), y: obj1.top + obj1.$node.height()};
  var min2 = {x: obj2.left, y: obj2.top};
  var max2 = {x: obj2.left + obj2.$node.width(), y: obj2.top + obj2.$node.height()};
  if(max1.x < min2.x || min1.x > max2.x) {
    return false;
  }
  if(max1.y < min2.y || min1.y > max2.y) {
    return false;
  }
  return true;
};

// initial declaration of user Plane. Automatically sets to specific location
var user = userPlane();
//call function whenever a key is pressed--> central controls
$('html').keydown(function(e){
  if(gameRunning === true){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code === 40){
      // move plane down;
      user.move(0, 20);
    } else if(code === 38 && user.top > 0){
      // move plane up;
      user.move(0, -20);
    } else if(code === 37 && user.left > 0){
      // move plane left;
      user.move(-20, 0);
    } else if(code === 39){
      // move plane right;
      user.move(20, 0);
    } else if(code === 32){
      // fire when user presses space
      user.fire();
    } else {
      return;
    }
  } else {
    return;
  }
});
