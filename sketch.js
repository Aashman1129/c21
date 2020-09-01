var fixedRect, movingRect;
var obj8,obj9;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj8=createSprite(100,100,80,30);
  obj8.shapeColor= "blue";
  obj9=createSprite(200,100,80,30);
  obj9.shapeColor= "blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  obj9.x=mouseX;
  obj9.y=mouseY;

  bounceOff(movingRect,fixedRect);
  if(isTouching(obj8,obj9)){
    obj8.shapeColor="red"; 
    obj9.shapeColor="red"; 
  }
  else{
    obj8.shapeColor="green"; 
    obj9.shapeColor="green"; 
  }
  
  drawSprites();
}

