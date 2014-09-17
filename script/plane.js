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

  plane.disappear

  plane.destroy = function(){
    // add class to the node of destroyed
    this.$node.removeClass().addClass('destroy');
    // give time to show explosion
    //this.setTimeout(, 900);
    console.log(this.$node);
    var node = this.$node;
    console.log(node);
    setTimeout(function(){
      $('.destroy').remove();
      //.body.removeChildren(document.getElementsByClassName('destroy'));
      console.log("in anonymous");
      },
      1000);
      this.left = -1;
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
    this.top += changeY;
    this.left += changeX;
    this.$node.css({top: this.top, left: this.left,});
  }

  return enemy;
}
