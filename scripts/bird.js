function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = .6;
  this.lift = -20; //find a way to make the lift constant
  this.velocity = 0;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 40, 40);
  }

  this.up = function(){
  //   this.velocity
    this.velocity += this.lift;
   //the lower the y, the higher the bird
    console.log("SPACE");
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height){ //if y = height, it is at the bottom
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0){ //if y = 0, it is at the top
      this.y=0;
      this.velocity=0;
    }
  }
}
