const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   
  engine = Engine.create();
  world = engine.world;
	
   
  PlayerBase = new PlayerBase(300,random(450,height-300),180,150);
  Player = new Player(285,PlayerBase.body.position.y-153,50,180);

  ComputerBase = new ComputerBase(1000,random(450,height-300),180,150);
  ComputerPlayer = new ComputerPlayer(1025,ComputerBase.body.position.y-153,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

    
  PlayerBase.display();
  ComputerBase.display();
  
  Player.display();
  ComputerPlayer.display();

  


}
