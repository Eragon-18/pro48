const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Detector = Matter.Detector;

var  archer, bow, arrow, arrowImage,target1, target2, target3, target4, target5;
var ground, ground2;
var engine, world;
var obstacle1, obstacle2;
var gameState = "onSling";
var score = 0;

function preload() {
  arrowImage = loadImage("arrow.png");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  archer = createSprite(250, 300, 50, 50);
  ground = new Ground(600,580,1500,10);
  ground2 = new Ground(600,20,1500,10);

  target1 = new Target(1000,120,40,40);
  target2 = new Target(1000,220,40,40);
  target3 = new Target(1000,320,40,40);
  target4 = new Target(1000,420,40,40);
  target5 = new Target(1000,520,40,40);

  obstacle1 = new Obstacle(850,160,35,35);
  obstacle2 = new Obstacle(850,270,35,35);

  arrow = new Arrow(340,300);
  arrowImage.scale = 0.1;

  bow = new Bow(arrow.body,{x:340,y:300})
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  target1.display();
  target2.display();
  target3.display();
  target4.display();
  target5.display();

  obstacle1.display();
  obstacle2.display();
  arrow.display();
  bow.display();

  fill("blue")
  text("500",990,125);
  text("400",990,225);
  text("300",990,325);
  text("200",990,425);
  text("100",990,525);
  textSize(20)
  text("Achieve 1800 score to win!",400,80)
  text("Score:" + score,700,80)

  if(target1.x-arrow.x < arrow.width/2 + target1.width/2 &&
    arrow.x-target1.x < arrow.width/2 + target1.width/2 &&
    target1.y-arrow.y < arrow.height/2 + target1.height/2 && 
    arrow.y-target1.y < arrow.height/2 + target1.height/2) { 
    score = score + 500;
  }
  
  if(Matter.Detector.canCollide(arrow,target2)) {
    score = score + 500;
  }
  
  if(Matter.Detector.canCollide(arrow,target3)) {
    score = score + 500;
  }
  
  if(Matter.Detector.canCollide(arrow,target4)) {
    score = score + 500;
  }
  
  if(Matter.Detector.canCollide(arrow,target5)) {
    score = score + 500;
  }
  drawSprites();
}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  bow.fly();
  gameState = "launched";
}
