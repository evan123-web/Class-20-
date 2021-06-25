
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var stick;
var stick2;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var stick_options ={
    density: 0.5, 
    restitution: 0.95,
    frictionAir:0.01
  

   }
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  stick = Bodies.rectangle(200,200, 70,50, stick_options);
  World.add(world,stick);
  

 stick2 = Bodies.rectangle(200,300, 70, 50, stick_options);
 World.add(world,stick2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
rect(ground.position.x,ground.position.y,400,20);
rect(stick.position.x,stick.position.y,300, 30);
rect(stick2.position.x,stick2.position.y, 300, 30);


  
  
}

