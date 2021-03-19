
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,stone,launcher,ground,world,boy,mango1,mango2,mango3,mango4,mango5;
function preload()
{
	boy = loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone = new stone1(235,420,30)
mango1 = new mango(900,160,40);
mango2 = new mango(900,230,40);
mango3 = new mango(1000,230,30);
mango4 = new mango(1100,100,30);
mango5 = new mango(1170,30);

tree = new tree1(1050,580);
ground = new ground1(width/2,600,width,20);
launcher = new launcher1(stone.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {

	background(230);
	//frameRate(2)
   // Engine.update(engine)
	textSize(25);
	text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200,340,200,300);
	//Engine.update(engine)
	
  
	tree.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
  
	ground.display();
	launcher.display();
	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);
  }

  function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcher.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

