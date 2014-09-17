var makePlane = function( top, left ){
  var plane = {};
  plane.top = top;
  plane.left = left;
  plane.$node = $('<span class="plane"></span>');
  plane.$node.css({
    top: plane.top,
    left: plane.left,
  });
  plane.move = function( changeX, changeY ){
    this.top += changeY;
    this.left += changeX;
    //this.$node.css({top: this.top, left: this.left,});
    this.$node.animate({top: this.top, left: this.left,}, 5);
  };


  plane.destroy = function(){
    // add class to the node of destroyed

    var $replacement = $('<span class="destroy"></span>');
    $replacement.css({top: this.top, left: this.left});
    $('body').prepend($replacement);
    // give time to show explosion
    //this.setTimeout(, 900);
    setTimeout(function(){
      $('.destroy').remove();
      //.body.removeChildren(document.getElementsByClassName('destroy'));
      },
      800);
      this.left = -150;
    // remove node from dom
    // remove plane from array of planes
  };

  return plane;
};

var userPlane = function(){
  var plane = makePlane( 150, 25 );
  plane.$node.addClass("user");


  plane.fire = function(){
    // pass in weapon object and fire
    var weapon = makeWeapon(this.top+15, this.left+60);
    weapon.move(30);
  }

  plane.destroy = function(){
    // add class to the node of destroyed

    var $replacement = $('<span class="userDestroy"></span>');
    $replacement.css({top: this.top, left: this.left});
    $('body').prepend($replacement);
    // give time to show explosion
    //this.setTimeout(, 900);
    setTimeout(function(){
      $('.userDestroy').remove();
      //.body.removeChildren(document.getElementsByClassName('destroy'));
      console.log("in anonymous");
      },
      800);
      this.left = -150;
      this.move(1, 1);
    // remove node from dom
    // remove plane from array of planes
  };

  return plane;
};

var enemyPlane = function(top, left){
  var enemy = makePlane( top, left );
  enemy.$node.addClass("enemy");
  enemy.fire = function(){
    // pass in weapon object and fire
    var weapon = makeEnemyWeapon(this.top+15, this.left-60);
    weapon.move(20);
  }

  enemy.move = function(changeX, changeY){
    if(Math.random() < .004){
      this.fire();
    }
    this.top += changeY;
    this.left += changeX;
    this.$node.css({top: this.top, left: this.left,});
  }

  return enemy;
}
