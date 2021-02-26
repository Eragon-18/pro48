class Bow {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 5
        }
        this.pointB = pointB
        this.bow = Constraint.create(options);
        this.bowImage = loadImage('bow.png');
        World.add(world, this.bow);
    }

    attach(body){
        this.bow.bodyA = body;
    }
    
    fly(){
        this.bow.bodyA = null;
    }

    display() {
        imageMode(CENTER)
        image(this.bowImage,340,300);
        if(this.bow.bodyA){
            var pointA = this.bow.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("white");
            strokeWeight(2);
            line(pointB.x-50,pointB.y-150,pointA.x-50,pointA.y-5);
            line(pointA.x-50,pointA.y-5,pointB.x-50,pointB.y+150);       
            pop();
        }
    }
}