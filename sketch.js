const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
this.heroIm = loadImage ('images/Superhero-02.png')

this.BcIm = loadImage ('images/GamingBackground')
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground (1000,height,3000,20)
  hero = new Hero (1000,1500,30)
  fly = new Fly (hero.body,{x:1000, y:1500});
}

function draw() {
  background(BcIm);

}

