
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var bob1i,bob2i,bob3i,bob4i,bob5i;

function preload()
{
	bob1i=loadImage("alienPink.png");
	bob2i=loadImage("pink_monster.png");
	bob3i=loadImage("kid_34_excited.png");
	bob4i=loadImage("popsicle_monster.png");
	bob5i=loadImage("alienYellow.png");
}

function setup() {
	var canvas = createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 60;
	var posX = width/2;
	var posY = height/2+ 200;

	bob1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bob2 = new Bob(posX - bobDiameter, posY, bobDiameter);
	bob3 = new Bob(posX, posY, bobDiameter);
	bob4 = new Bob(posX + bobDiameter, posY, bobDiameter);
	bob5 = new Bob(posX + bobDiameter*2, posY, bobDiameter);
   
    roof = new Top(485,250,300,20);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0); 
 	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0); 
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,250,250);
  Engine.update(engine);

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
roof.display();

  drawSprites();
}
function keyPressed() { 
	if (keyCode === RIGHT_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-45}); } 

if (keyCode === LEFT_ARROW) 
	{ Matter.Body.applyForce(bob5.body,bob5.body.position,{x:55,y:45}); } 
} 
