var car, wall, thickness;
var speed, weight;

function setup() 
{
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  
  speed = random(223, 321);
  weight = random(0, 10);
  thickness = random(10, 40);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  
  
}

function draw() 
{
  background(255);
  
 
  if(hasCollided(car, wall))
  {
    car.velocityX = 0;
    var damage = ((0.5 * weight * speed * speed) / (thickness * thickness * thickness));
    if (damage > 10)
    {
      car.shapeColor = color(255, 0, 0);
    }

    if (damage < 10)
    {
      car.shapeColor = color(0, 255, 0);
    }

  }
  drawSprites();
}

/*function hasCollided(lbullet, wall)
{
  if (wall.x-car.x < (car.width + wall.width) / 2)
  {
    car.velocityX = 0;
    car.collide(wall);
    var deformation = ((0.5 * weight * speed * speed) / 22509) 
    if (deformation > 180)
    {
      car.shpaeCOlor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation>100)
    {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100)
    {
      car.shapeColor = color(0, 255, 0);
    }
  }
}*/

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;

}

