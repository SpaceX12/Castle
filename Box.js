class Box {
    constructor(x, y, width, height){
        var option = {
            restitution = 0.5,
            friction = 1,
            density = 1,
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.w = width;
        this.h = height;

        World.add(world.this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, w, h);
        pop();
        
    }
}