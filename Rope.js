class Rope{
    
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        stroke("purple");
        fill(0);

        var nib1X = pointA.x;
        var nib1Y = pointA.y;

        var nib2X = pointB.x+this.offsetX;
        var nib2Y = pointB.y+this.offsetY;

        line(nib1X, nib1Y, nib2X, nib2Y);
    }
}