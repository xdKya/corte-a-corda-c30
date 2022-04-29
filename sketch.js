const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var ground;
var rope;
var fruit;
var linkfruit;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground  = new Ground(200,690,600,20);

  rope = new Rope(10,{x:250,y:30});

  var fruit_options = {
    density: 0.001
  }
  fruit = Bodies.circle(250,300,15,fruit_options);
  Composite.add(rope.body,fruit);

  linkfruit = new Link(rope,fruit);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  rope.show();

  ellipse(fruit.position.x,fruit.position.y,15);
   
}




