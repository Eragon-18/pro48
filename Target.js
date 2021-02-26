class Target {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position;
        fill("red");
        strokeWeight(10);
        stroke("green");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.width,this.height)

        if(this.body.speed < 3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            pop();
           }
        else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             pop();
            }
        }
        
          score(){
            if (this.Visiblity < 0 && this.Visiblity > -1005){
              score++;
            }
          }
    }


