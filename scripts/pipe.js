function Pipe() {
  //needs
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 3;

  this.hits = function(bird){
    if (bird.y < this.top || bird.y > height-this.bottom){
      if (bird.x > this.x && bird.x < this.x+this.w){
        return true;
      }
    }
    return false;
  }

  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
    console.log("show");
  }

  this.update = function() {
    this.x -= this.speed;
    console.log("update");
  }

  this.offscreen = function() {
    if (this.x < -this.w){ //if x is offscreen, return true
      return true;
    }
    else{
      return false;
    }

  }
}
