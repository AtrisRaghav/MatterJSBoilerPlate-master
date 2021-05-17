class Dustbin{
    constructor(x, y, height, width){
        var options = {
            isStatic : true, 'restistution' : 0, 'friction' :1, 'density' :0.1
        }
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }

    display(){
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
} 