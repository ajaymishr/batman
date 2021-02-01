const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,dr;
var person,personimage,people,peoples;
var maxdrops=100,thunder,thunderi1,thunderi2,thunderi3,thunderi4;
var dr=[];
function preload(){
    personimage=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    thunderi1=loadImage("1.png")
    thunderi2=loadImage("2.png")
    thunderi3=loadImage("3.png")
    thunderi4=loadImage("4.png")
}

function setup(){
   createCanvas(500,600);
   engine = Engine.create();
   world = engine.world;
   person=new Ground(160,350,90);
   people=createSprite(150,410,30,30);
   people.addAnimation("walking",personimage);
   people.scale=0.5;
   if(frameCount%150===0){
    for(var i = 0; i<100; i++){
       dr.push(new Drops(random(0,500),random(0,500),10,10))
    }
   }
       
}
function draw(){
background(0);
Engine.update(engine);
var image=Math.round(random(1,4));
    if(frameCount%70===0){
        thunder=createSprite(random(0,500),0,10,10);
        if(image<2){
            thunder.addImage(thunderi1);
        }if(image<3&&image>1){
            thunder.addImage(thunderi2);
        }if(image<4&&image>2){
            thunder.addImage(thunderi3);
        }else{
            thunder.addImage(thunderi4);
        }
    thunder.lifetime=15;
    }
     for(var i = 0; i<100; i++){
        dr[i].display();
        dr[i].updateY();
    }
    drawSprites();
}   