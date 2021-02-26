class Arrow {
    constructor(x,y,width,height,angle){
        var options = {
            restitution: 2,
            density: 0.3,
            airFriction: 0.4,
            isStatic: true
        }
        this.image = loadImage('arrow.png')
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 120, 100);
        pop();
        //image(this.image,arrow.body.pos.x,arrow.body.pos.y,120,100);
    }
}