function hasCollided (bullet,wall){
  var bulletRightEdge = bullet.x + bullet.width;
  var wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }  else
  {
    return false;
  }
}


