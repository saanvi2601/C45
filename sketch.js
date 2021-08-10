const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;



var gameState = "start";



function preload(){
  bg1 = loadImage("images/underwater.png");
  start = loadImage("images/start.png");
  bg2 = loadImage("images/background.jpg");

}




function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  playButton = createSprite(600,300,100,50);
  playButton.addImage(start);
  playButton.scale = 0.3
  playButton.visible = false;
}

function draw() {
  background(bg1); 

  Engine.update(engine);

  if(gameState === "start"){
    push()
    textSize(45);
    fill("green"); 
    text("Welcome to FISH HUNT",400,100);
    pop();
 
    push()
    textSize(30);
    fill("red");
    text("There is a cat in the game",200,200);
    pop();

    playButton.visible = true;

    if(mousePressedOver(playButton)){
      gameState = "play";
      
    }
      
  }

  if (gameState === "play"){
      background(bg2)
      playButton.visible = false;
  }




  drawSprites();
}