class Box {
    constructor(x1, y1, x2, y2, x3, y3){
        var option = {
            restitution = 0.5,
            friction = 1,
            density = 1,
        }
        this.body = Bodies.triangle(x1, y1, x2, y2, x3, y3, option);
        
        World.add(world.this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        shape(0, 0, 0, 0, 0, 0);
        pop();
        
    }
}