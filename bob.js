class Bob {
    constructor(x, y, radius) {
      var prop = {
          'restitution':0.8,
          'friction':0.3,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, prop);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  