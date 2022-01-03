const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400, 75, 600, 25);

	bob1 = new Bob(200, 550, 100);
	bob2 = new Bob(300, 550, 100);
	bob3 = new Bob(400, 550, 100);
	bob4 = new Bob(500, 550, 100);
	bob5 = new Bob(600, 550, 100);

	rope1 = new Rope(roof.body, bob1.body, -200, 0);
	rope2 = new Rope(roof.body, bob2.body, -100, 0);
	rope3 = new Rope(roof.body, bob3.body, 0, 0);
	rope4 = new Rope(roof.body, bob4.body, 100, 0);
	rope5 = new Rope(roof.body, bob5.body, 200, 0);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0, 0, 255);

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	drawSprites();
 
}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -100, y: -100});
	}
}
