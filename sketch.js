
var cat ;
var mouse;
var backGround
var CatImage, MovingCatImage, CatImage2;
var MouseImage, MovingMouseImage, MouseImage2;

var BG

function preload() {
    
CatImage = loadImage("cat1.png");
MovingCatImage = loadAnimation("cat2.png","cat3.png");
CatImage2 = loadAnimation("cat4.png")

MouseImage = loadImage("mouse1.png");
MovingMouseImage = loadAnimation("mouse2.png","mouse3.png");
MouseImage2 = loadAnimation("mouse4.png")

BG = loadImage("garden.png");

}

function setup(){
   
   createCanvas(1000,800);

   cat = createSprite(600,625,20,20);
   cat.addImage(CatImage);
   cat.scale = 0.15;
   
   mouse = createSprite(200,625,20,20);
   mouse.addImage(MouseImage);
   mouse.scale = 0.15;

  // backGround = createSprite(500,400,500,400)

}

function draw() {
   
  background(BG);
    
    keyPressed();
    drawSprites();
    touch();
}


function keyPressed(){

 if (keyDown("space")){
  
  cat.velocityX = -5;
  
  cat.addAnimation("cat Animation",MovingCatImage);
  cat.changeAnimation("cat Animation");
 
  mouse.addAnimation("mouseAnimation", MovingMouseImage);
  mouse.changeAnimation("mouseAnimation");

}

}

function touch() {

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){

      cat. velocityX = 0;
      
      cat.addAnimation("finalAnimation",CatImage2);
      cat.changeAnimation("finalAnimation");

      mouse.addAnimation("finalMouse",MouseImage2);
      mouse.changeAnimation("finalMouse");
    
    }
   
  }

