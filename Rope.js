class Rope {
    constructor (varBodyA, varBodyB, offSetX, offSetY) {
        this.offsetX = offSetX;
        this.offsetY = offSetY
        
        var options = { 
            bodyA: varBodyA, 
            bodyB: varBodyB
            //stiffness: 1, 
            //length: 475
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position; 
        strokeWeight(3)
        line(pointA.x + this.offsetX, pointA.y, pointB.x, pointB.y);

    }
}