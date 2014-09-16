var makeWeapon = function(top, left){
  //starts at location of airplane
  var weapon = {};
  weapon.top = top;
  weapon.left = left;
  weapon.$node = $('<span class="weapon"></span>')
  weapon.$node.css({
    top: weapon.top,
    left: weapon.left,
  });
  $('body').append(weapon.$node);



  weapon.move = function(speed){
    if(this.left < $(window).width()){
      this.left += speed;
      this.$node.css({left: this.left});
      setTimeout(this.move.bind(this, speed), 100);
    } else {
      this.$node.remove();
    }
  };
  return weapon;
};




