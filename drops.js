class Drops{
    constructor(x, y, radius,angle) {
        var options = {
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius =radius;
        this.image = loadImage("drop.png");
        World.add(world, this.body);
      }
      updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,500), y:random(0,400)})
        }
    }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0, this.radius,this.radius);
        pop();
      }
}