class Bob{
    constructor(x,y,radius){
    var options ={
        isStatic:false,
        restitution: 0.9,
        friction: 1.0,
        density: 1.2
    }
     this.radius=radius;
     this.x =x;
     this.y=y;
     this.image=loadImage("alienPink.png");
     this.body = Bodies.circle(this.x,this.y,(this.radius)/2, options);
     World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(3)
        stroke("purple");
        fill("violet");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}