
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball,ball2,ball3,ball4,ball5;
var ground;
var wedge,wedge2,wedge3;
var angle=60;
var angle2=60;
var angle3=60;
var poly;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.50,
    frictionAir:0.02
  }
   
   var ground_options ={
     isStatic: true
   };
  
  var ops={
    isStatic:true
  };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,10,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,10,10,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(105,10,10,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(95,10,10,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(80,10,10,ball_options);
  World.add(world,ball5);
  
  wall = Bodies.rectangle(300, 150, 70, 10, ground_options);
  World.add(world,wall);
  
  wedge = Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge);

  wedge2 = Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge2);
  
  wedge3 = Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge3);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(wedge,angle)
   push();
   translate(wedge.position.x,wedge.position.y);
   rotate(angle);
   rect(0,0,100,20);
   pop();
   angle +=0.1;

   Matter.Body.rotate(wedge2,angle2)
   push();
   translate(wedge2.position.x,wedge2.position.y);
   rotate(angle2);
   rect(0,0,100,20);
   pop();
   angle2 +=0.2;

  Matter.Body.rotate(wedge3,angle3)
   push();
   translate(wedge3.position.x,wedge3.position.y);
   rotate(angle3);
   rect(0,0,100,20);
   pop();
   angle3 +=0.3;

  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  ellipse(ball5.position.x,ball5.position.y,10);

  rect(ground.position.x,ground.position.y,400,20);
 


  rect(wall.position.x,wall.position.y,70,20);

  
  
}

