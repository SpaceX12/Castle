const Engine = Matter.Engine;
const World = Matteer.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2, box3, cone; 

function setup() {
  var canvas = createCanvas(800,800);
  box1 = new Box(400,390,600,20);
  box2 = new Box(400,350,10,10);
  box3 = new Box(400,300,10,40);
  ground = new Ground(400,390,400,20);
  cone = new Cone(400,400,450,400,425,440);
}

function draw() {
  background(0);
  Engine.update(engine);  
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  cone.display();
}