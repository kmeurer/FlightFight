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
    var moveTop = Math.random()*200 + this.top;
    var moveBot = Math.random()*200 + this.left;
    this.$node.animate({top: moveTop, left: moveBot });
  };


  return plane;
};

var userPlane = function(){
  var plane = makePlane( 150, 25 );
  plane.$node.addClass("user");
  plane.move = function( changeX, changeY ){
    /*var detached = $(".user").detach();*/
    this.top += changeY;
    this.left += changeX;
    //var newTop = this.top + changeY;
    //var newLeft = this.left + changeX;
    this.$node.css({top: this.top, left: this.left,});


  };

  plane.fire = function(){
    // pass in weapon object and fire
    var weapon = makeWeapon(this.top+15, this.left+60);
    console.log("user fire");
    weapon.move(10);
  }
  return plane;
}
