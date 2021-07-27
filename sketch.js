let mainShip;
let mainShipImg;
let bg;
let ship;
let ship1;
let ship2;
let ship3;
let ship4;
let ship1Img;
let ship2Img;
let ship3Img;
let ship4Img; 
let hasDocked = false;

function preload(){
  bg = loadImage("images/spacebg.jpg");
  mainShipImg = loadImage("images/iss.png");
  ship1Img = loadAnimation("images/spacecraft1.png");
  ship2Img = loadAnimation("images/spacecraft2.png");
  ship3Img = loadAnimation("images/spacecraft3.png");
  ship4Img = loadAnimation("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,600);
  mainShip = createSprite(400, 280, 50, 50);
  mainShip.addImage("mainship",mainShipImg);
  ship = createSprite(330,425,50,50);
  ship.addAnimation("ship1",ship1Img);
  ship.addAnimation("ship2",ship2Img);
  ship.addAnimation("ship3",ship3Img);
  ship.addAnimation("ship4",ship4Img);
  ship.scale = 0.25;
}

function draw() {
  background(bg);  

  if(hasDocked){
    ship.x = Math.round(random(320,340));

    if(keyDown("left")){
      ship.x = ship.x - 1;
      ship.changeAnimation("ship3",ship3Img);
    }
  
    if(keyDown("right")){
      ship.x = ship.x + 1;
      ship.changeAnimation("ship4",ship4Img);
    }
  
    if(keyDown("up")){
      ship.y = ship.y - 1;
      ship.changeAnimation("ship1",ship1Img);
    }
  
    if(keyDown("down")){
     // ship.x = ship.y + 1;
      ship.changeAnimation("ship2",ship2Img);
    }
    
  }

  drawSprites();
}