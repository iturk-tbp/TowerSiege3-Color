class Box2 {
  constructor(x,y,width,height){
    var options = {
      isStatic: false,
      density: 1,
      restitution: 0.1
    }
    this.image = loadImage("box2.png")
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height =height;
    this.visibility = 255
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    if(this.body.speed<2.75){
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
    }
    else{
      World.remove(world,this.body)
      push ()
      this.visibility = this.visibility - 5
      tint (255, this.visibility)
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop()
    }
    
  }
  score(){
    if(this.visibility< 0 && this.visibility>= -105){
      score ++

    }
  }
}