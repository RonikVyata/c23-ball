class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true
    };
    this.r = 20;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    this.trajectory=[]
    World.add(world, this.body);
  }

  shoot() {
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }

  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    //To record the points where the ball passed and push them in the trajectory array

    if(this.body.velocity.x>0 && pos.x > 50){
      var position = [pos.x, pos.y]
      this.trajectory.push(position)
    }

    //to display small black balls or the positions inside the trajectory
    //intialization, condition, increase decrease
    for(var i = 0; i < this.trajectory.length; i++){
      image(this.image,this.trajectory[i][0], this.trajectory[i][1],5,5)
    }
  }
}
