var makeWeapon = function(top, left){
  //starts at location of airplane
  var weapon = {};
  weapon.top = top;
  weapon.left = left;
  weapon.move = function(speed){
    while(weapon.left < window.getWidth()){
      weapon += speed;
    }
  };
  return weapon;
};




