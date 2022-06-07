
const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Bob(400, 500, 75);
	ball2 = new Bob(550, 500, 75);
	ball3 = new Bob(700, 500, 75);
	ball4 = new Bob(250, 500, 75);
	ball5 = new Bob(100, 500, 75);

	roof1 = new Roof(400, 250, 800, 20);

	chain1 = new Chain(ball1.body, roof1.body, 0, 0);
	chain2 = new Chain(ball2.body, roof1.body, 150, 0);
	chain3 = new Chain(ball3.body, roof1.body, 300, 0);
	chain4 = new Chain(ball4.body, roof1.body, -150, 0);
	chain5 = new Chain(ball5.body, roof1.body, -300, 0);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();


  roof1.display();

  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(ball5.body, ball5.body.position, {x:-50, y:-45});
  }


  drawSprites();
 
}
 


