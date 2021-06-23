
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roof
var world;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,250,230,20);
	bob1 = new Bob(320,350,40)
	bob2 = new Bob(360,350,40);
	bob3 = new Bob(400,350,40);
	bob4 = new Bob(440,350,40);
	bob5 = new Bob(480,350,40);
	chain1 = new Chain(bob1.body, roof.body)
	chain2 = new Chain(bob2.body, roof.body);
	chain3 = new Chain(bob3.body, roof.body)
	chain4 = new Chain(bob4.body, roof.body)
	chain5 = new Chain(bob5.body, roof.body)

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  keyPressed();

}

function keyPressed(){
	if(keyDown("UP_ARROW")){
        Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-10, y:-10})
	}
}
