var m,f
function setup() {
  createCanvas(800,400);
  m = createSprite(400, 200, 100, 50);
  f = createSprite(400, 200, 50, 100);
  m1 = createSprite(550, 220, 100, 50);
  f1= createSprite(240, 220, 50, 100); m1.velocityX=-5
}

function draw() {
  background(0,0,0); 
  m.x=World.mouseX;
  m.y=World.mouseY; 
  if (ekamtouch(m,f)){
  m.shapeColor="red";
  f.shapeColor="red";}
  else
 { m.shapeColor="white";
  f.shapeColor="white";}

  ekambounce(m1,f1);  
  drawSprites();
}
