const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {

  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
ground1 = new Ground(120,235,30,40);
polygon1 = new polyGon(200,235,50);


  block1 = new block(120,235,30,40);
  block2 = new block(150,235,30,40);
  block3 = new block(180,235,30,40);
  block4 = new block(210,235,30,40);
  block5 = new block(240,235,30,40);
  block6= new block(270,235,30,40);
  block7 = new block(300,235,30,40);
  block8= new block(330,235,30,40);
  block9 = new block(360,235,30,40);
  block10 = new block(390,235,30,40);
  block11 = new block(420,235,30,40);
  block12 = new block(450,235,30,40);
  block13 = new block(480,235,30,40);
  block14= new block(510,235,30,40);
  block15 = new block(540,235,30,40);
  block16= new block(570,235,30,40);
  console.log(polygon1.body)
 sling= new slingshot(polygon1.body,{x:200, y:50});

}

function draw() {
  background(255,255,255);
  block1 .display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  sling.display();
  ground1.display();
  polygon1.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 sling.fly();
}
