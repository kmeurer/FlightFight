var makePlane = function( top, left ){
  var plane = {};
  plane.top = top;
  plane.left = left;
  plane.$node = $('<span class="plane"></span>');
  plane.$node.css({
    top: plane.top,
    left: plane.left,
  });
  plane.move = function(newTop, newLeft){
    //update top & left positions
    this.top = newTop;
    this.left = newLeft;
  };

  plane.fire = function(weapon){
    // fire weapon at targets
    // constant top & fast left
  };

  return plane;
};

var userPlane = function(){
  var plane = makePlane( 150, 25 );
  plane.$node.addClass("user");
  plane.move = function( newTop ){
    this.top = newTop;
  };

  plane.fire = function(){
    // pass in weapon object and fire
    var weapon = MakeWeapon(this.top+64, this.left+128);
    weapon.move(speed);
  }
  return plane;
}
