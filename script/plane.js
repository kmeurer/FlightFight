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
    this.$node.removeClass().addClass("destroy");
    console.log(this.$node);
    // give time to show explosion
    this.top -= 30;
    this.left -= 30;
    //this.setTimeout(, 900);
    console.log(this);
    this.setTimeout(this.$node.addClass.bind(this,"destroy"), 1000);
    $(".destroy").remove()
    // remove node from dom
    // remove plane from array of planes
    this.left = -1;
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
