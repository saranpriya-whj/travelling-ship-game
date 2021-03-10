var ship , ship_jumping,shipImg2,sea,seaImg ;


function preload(){
  
  ship_jumping = loadAnimation("ship-1.png","ship-2.png");
  shipImg2 = loadAnimation("ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png")
}
    
function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,400,400);
  sea.addImage("sea",seaImg);
  sea.scale = 0.3;
  sea.velocityX = -3;
  
  ship = createSprite(100,200,20,20);
  ship.addAnimation("ship",ship_jumping);
  ship.scale = 0.2;
  
}

function draw() {
  background("blue");
   if(keyDown("space")){
      ship.addAnimation("shiplighton",shipImg2);    
    }
  
  if(keyDown("UP_ARROW")){
    ship.y = ship.y - 5;
  }
  if(keyDown("DOWN_ARROW")){
  ship.y = ship.y + 5;
  }
  
  if(sea.x<0){
    sea.x = 200;
  }
  
  if(ship.y<170){
    ship.y=200
  }
  
  
  
  drawSprites();
 
}