
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter = 40;
	roof = new Roof (width/2,height/4,width/7,20);
	 startBobPositionX=width/2; 
  startBobPositionY=height/4+500; 
  bob1=new ball(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
  bob2=new ball(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
  bob3=new ball(startBobPositionX,startBobPositionY,bobDiameter); 
  bob4=new ball(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
  bob5=new ball(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	rope1 =new Chain (bob1.body,roof.body, - bobDiameter*2,0);
	rope2 =new Chain (bob2.body,roof.body, - bobDiameter*1,0);
	rope3 =new Chain (bob3.body,roof.body, 0,0);
	rope4 =new Chain (bob4.body,roof.body, + bobDiameter*1,0);
	rope5 =new Chain (bob5.body,roof.body, + bobDiameter*2,0);
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
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
}


function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	  //Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:-85})
	}
  }

  