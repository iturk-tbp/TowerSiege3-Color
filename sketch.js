const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var engine, world;
var gameState = 0
var score = 0
var backgroundImg


function preload() {
    getImage();
    poly = loadImage("polygon.png")
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polyy = new Polygon(40,350,40);

    g = new Ground (600,390,1200,20);
    g1 = new Ground(500,350,350,20);
    g2 = new Ground(900,200,200,20);

    
    b1 = new Box1 (500,320,40,40);
    b2 = new Box (460,320,40,40);
    b3 = new Box (540,320,40,40);
    b4 = new Box1 (580,320,40,40)
    b5 = new Box1 (420,320,40,40)
    b10 = new Box (620,320,40,40);
    b11 = new Box (380,320,40,40);

    b6 = new Box (500,280,40,40);
    b7 = new Box1 (460,280,40,40);
    b8 = new Box1 (540,280,40,40);
    b12 = new Box (580,280,40,40);
    b13 = new Box (420,280,40,40);

    b9 = new Box1(500,240,40,40);
    b14 = new Box (540,240,40,40);
    b15 = new Box (460,240,40,40);

    b16 = new Box(500,200,40,40)


    b17 = new Box3(900,160,40,40);
    b18 = new Box2 (860,160,40,40);
    b19 = new Box2 (940,160,40,40);


    b20 = new Box2(900,120,40,40)


    sling = new Slingshot(polyy.body,{x: 50,y: 300});
    

    World.add(world,poly)
    
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    fill("green");
    textSize(30);
    text("Score: "+ score,0,35);
    Engine.update(engine);
    
    g.display();
    g1.display();
    g2.display();
    
    
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b10.display();
    b11.display();

    b6.display();
    b7.display();
    b8.display();
    b12.display();
    b13.display();

    b9.display();
    b14.display();
    b15.display();

    b16.display();

    b17.display();
    b18.display();
    b19.display();

    b20.display();
    
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b10.score();
    b11.score();

    b6.score();
    b7.score();
    b8.score();
    b12.score();
    b13.score();

    b9.score();
    b14.score();
    b15.score();

    b16.score();

    b17.score();
    b18.score();
    b19.score();

    b20.display();

    polyy.display();

    sling.display();

    

}
function mouseDragged(){
    Matter.Body.setPosition(polyy.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    sling.fly();
    Body.setStatic(polyy.body,false)
}

function keyPressed(){
if (keyCode == 32){
    Matter.Body.setPosition(polyy.body,{x:40,y:350});
    sling.attach(polyy.body);
}
}

async function getImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime
    var hour = dateTime.slice(11,13)
    if (hour<= 18 && hour>= 06){
        bg = "cyan"
    }
    else{
        bg = "black"
    }
    backgroundImg = bg
}