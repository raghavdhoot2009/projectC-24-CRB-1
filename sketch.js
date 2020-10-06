
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var paperobj;
var groundobj;
var dustbinobj;

function setup() {
createCanvas(1600, 700);
rectMode(CENTER);

engine = Engine.create();
world = engine.world;
paperobj=new paper(200,450,40);
groundobj = new ground(width/2, 670, width,20);
dustbinobj = new dustbin(1200,650); 


var render = Render.create({
element: document.body,
engine: engine,
options: { 
width: 1200,
height: 700,
wireframes: false 
}
}
);


Engine.run(engine);
}


function draw() {
rectMode(CENTER);
background(0);
paperobj.display();
dustbinobj.display(); 
groundobj.display(); 

 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85}); 
} 
} 