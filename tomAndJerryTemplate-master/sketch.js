var cat1, cat2, cat3, cat4;
var bgImg;
var mouse1, mouse2, mouse3, mouse4;
function preload() {
    //load the images here
    bgImg =loadImage("image/garden.png");
    mouse1 =loadImage("image/mouse1.png");
    mouse2 =loadImage("image/mouse2.png");
    mouse3 =loadImage("image/mouse4.png");
    mouse4 =loadImage("image/mouse4.png");
    cat1 =loadImage("image/cat1.png");
    cat2 =loadImage("image/cat2.png");
    cat3 =loadImage("image/cat3.png");
    cat4 =loadImage("image/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    // create tom and jerry sprites here
    cat1 =createSprite(200,100);
    mouse1 =createSprite(600,100);
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat1.x - mouse1.x <(cat.width - mouse1.width)/2){
        cat1.addAnimation("catRunning",cat2);
        cat.changeAnimation("catRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse1.addAnimation("mouseTeasing", mouse2);
      mouse1.changeAnimation("mouseTeasing");
      mouse1.frameDelay = 25;
  }


}
