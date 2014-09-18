$(document).ready(function(){
  window.planes = [];
  
});


  // initial declaration of user Plane. Automatically sets to specific location
//used as a safeguard against user action outside of a game context
var gameRunning = false;
  var score = 0;

var startGame = function(){
  $('#gameOver').remove();
  score = 0;
  user = userPlane();
  $scoreNode = $('<div id ="scoreDiv"><h2>Score</h2><span id = "score"></span></div>');
  console.log("first score is " + score);
  gameRunning = true;
  //$("body").prepend(score.$node);
  $('body').prepend(user.$node);
  $('body').prepend($scoreNode);
  updateScore();
  $('#welcome').remove();
  scoreUpdate = window.setInterval( function(){if(gameRunning){updateScore();}}, 500);
  spawnUpdate = window.setInterval( function(){if(gameRunning){spawnEnemy();}}, 1500);
  enemyUpdate = window.setInterval( function(){if(gameRunning){moveEnemy();}}, 15);
  endUpdate = window.setInterval( function(){if(!gameRunning){endGame();}}, 500);
};

var endGame = function(){
  clearInterval(scoreUpdate);
  clearInterval(spawnUpdate);
  clearInterval(enemyUpdate);
  clearInterval(endUpdate);
  planes.forEach(function (el, i){
    el.$node.remove();
  });
  var msg;
  if( score < 10){
    msg = "Flying just isn't your thing.";
  } else if (score < 20 ){
    msg = "I guess you could be an extra in Top Gun if you got lucky.";
  } else if (score < 50 ){
    msg = "OK, you're decent."
  } else if (score < 80 ){
    msg = "Alright, Goose.  You died, but ya had a good run."
  } else if (score < 120){
    msg = "I told the Air Force about you.  Expect a call soon."
  } else {
    msg = "Unbelievable.  You're a true master."
  }
  var $endNode = $('<div id = "gameOver"><h1>Game Over</h1><h2>Your score: <span id = "endScore">' + score + '</span></h2><p>' + msg + '</p><button value="Start" onclick = "startGame()">Play Again</button></div>');
  $('body').prepend($endNode);
  $('#scoreDiv').remove();
}


var updateScore = function(){
  if( gameRunning = true ){
    $("#score").html(score);
  }
};

var spawnEnemy = function(){
  if (gameRunning === true){
    var randTop = Math.random() * $(window).height()-200;
    while(randTop < 20){
      randTop = Math.random() * $(window).height()-200;
    }
    var enemy = enemyPlane( randTop, $(window).width() );
    window.planes.push(enemy);
    $('body').prepend(enemy.$node);
  }
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

//call function whenever a key is pressed--> central controls
$('html').keydown(function(e){
  if(gameRunning === true){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code === 40){
      // move plane down;
      user.move(0, 30);
    } else if(code === 38 && user.top > 0){
      // move plane up;
      user.move(0, -30);
    } else if(code === 37 && user.left > 0){
      // move plane left;
      user.move(-30, 0);
    } else if(code === 39){
      // move plane right;
      user.move(30, 0);
    } else if(code === 32){
      // fire when user presses space
      setTimeout(function(){user.fire();}, 25);
    } else {
      return;
    }
  } else {
    return;
  }
});
