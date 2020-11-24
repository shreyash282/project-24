
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,leftdustbin,rightdustbin,centerdustbin;
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(150,400,20)
leftdustbin = new Dustbin(450,630,10,100)
rightdustbin = new Dustbin(650,630,10,100)
centerdustbin = new Dustbin(550,680,200,10)
ground = new Ground(400,690,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display()
  leftdustbin.display()
  rightdustbin.display()
  centerdustbin.display()
  ground.display()
  
  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-50})

	
	
}



