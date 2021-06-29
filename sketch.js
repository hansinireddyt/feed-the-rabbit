var garden,rabbit;
var gardenImg,rabbitImg;
var appleG , leafG

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage ("apple.png");
  leafImage = loadImage ("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
appleG = new Group ();
leafG = new Group ();
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  spawnLeaves ();
  if (leafG.isTouching (rabbit)){
    leafG.destroyEach ();
  }

  spawnApples ();
  if (appleG.isTouching (rabbit)){
    appleG.destroyEach ();
  }
  

  drawSprites();
  
}
  

function spawnLeaves(){
  if (frameCount % 60 === 0){

  
  var leaf = createSprite (random (150,200),100,40,10);
  leaf.addAnimation ("leafImage", leafImage);
  leaf.velocityY = 3;
  leaf.scale = 0.05;
  leafG.add (leaf);
}
}

  function spawnApples (){
  if (frameCount % 60 === 0) {

   
  var apples = createSprite (random (50,130), 40,10,10) ;
  apples.addAnimation ("appleImage", appleImage);
  apples. velocityY = 3;
  apples.scale = 0.05;
  appleG. add (apples);
  }
}
  
 








  





