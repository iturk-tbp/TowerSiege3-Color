class Polygon {

    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{
            isStatic: false,
            density: 1.0
        })
        World.add(world,this.body);
       this.radius = radius;
       this.image = loadImage("polygon.png")
      
    }
    display(){
            var pos = this.body.position


            imageMode(CENTER)
            image(this.image,pos.x,pos.y,this.radius,this.radius);
            
            
    }
    
    }